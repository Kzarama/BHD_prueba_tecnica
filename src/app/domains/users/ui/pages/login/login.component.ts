import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { IUserDataLogin } from '@/core/interfaces/user';
import { AuthService } from '@/domains/users/infrastructure/services/auth.service';
import { snackBarDuration } from '@/shared/constants';
import { LogoComponent } from '@/shared/ui/atoms/logo/logo.component';
import { SnackbarComponent } from '@/shared/ui/atoms/snackbar/snackbar.component';
import { LayoutComponent } from '@/shared/ui/templates/layout/layout.component';
import { DemoComponent } from '../../organisms/demo/demo.component';
import { LoginFormComponent } from '../../organisms/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [
    LogoComponent,
    LayoutComponent,
    LoginFormComponent,
    DemoComponent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  showDemo = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}

  login(data: IUserDataLogin) {
    this.authService.login(data.user, data.password).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/dashboard']);
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: { message: 'Credenciales incorrectas' },
            duration: snackBarDuration,
            verticalPosition: 'top',
            panelClass: 'error-snack',
          });
        }
      },
    });
  }

  toggleShowDemo() {
    this.showDemo = !this.showDemo;
  }
}
