import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { LogoComponent } from '@/components/atoms/logo/logo.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { ButtonComponent } from '@/components/atoms/button/button.component';
import { IUserData } from 'interfaces/user';
import { UserDataService } from 'app/services/user-data.service';

@Component({
  selector: 'app-menu',
  imports: [LogoComponent, RouterLink, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() isAnimating = false;
  @Output() cerrar = new EventEmitter<void>();
  isAuthenticated = false;
  userData: IUserData | null = null;

  @ViewChild('modalContent') modalContent: ElementRef | null = null;

  constructor(
    private readonly elRef: ElementRef,
    readonly authService: AuthService,
    readonly userDataService: UserDataService,
    private readonly router: Router
  ) {
    authService.isAuthenticated().subscribe({
      next: (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      },
    });

    userDataService.getUserData().subscribe({
      next: (userData) => {
        this.userData = userData;
      },
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      this.modalContent &&
      !this.modalContent.nativeElement.contains(event.target)
    ) {
      this.cerrar.emit();
    }
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
