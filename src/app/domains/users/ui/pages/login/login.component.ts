import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@/domains/users/infrastructure/services/auth.service';
import { IUserDataLogin } from 'app/core/interfaces/user';
import { LogoComponent } from '@/shared/ui/atoms/logo/logo.component';
import { LayoutComponent } from '@/shared/ui/templates/layout/layout.component';
import { DemoComponent } from '../../organisms/demo/demo.component';
import { LoginFormComponent } from '../../organisms/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [LogoComponent, LayoutComponent, LoginFormComponent, DemoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected showDemo = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login(data: IUserDataLogin) {
    this.authService.login(data.user, data.password).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/dashboard']);
        } else {
          console.log('err');
        }
      },
    });
  }

  toggleShowDemo() {
    this.showDemo = !this.showDemo;
  }
}
