import { LogoComponent } from '@/components/atoms/logo/logo.component';
import { DemoComponent } from '@/components/organisms/demo/demo.component';
import { LoginFormComponent } from '@/components/organisms/login-form/login-form.component';
import { LayoutComponent } from '@/components/templates/layout/layout.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { IUserDataLogin } from 'interfaces/user';

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
