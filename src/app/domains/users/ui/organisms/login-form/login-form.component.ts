import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { IUserDataLogin } from 'app/core/interfaces/user';
import { ButtonComponent } from '@/shared/ui/atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { SwitchComponent } from '../../atoms/switch/switch.component';

@Component({
  selector: 'app-login-form',
  imports: [
    InputComponent,
    SwitchComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @Output() formData = new EventEmitter<IUserDataLogin>();

  profileForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    this.formData.emit({
      user: this.profileForm.value.user ?? '',
      password: this.profileForm.value.password ?? '',
    });
  }
}
