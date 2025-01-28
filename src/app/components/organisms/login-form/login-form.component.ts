import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '@/components/atoms/input/input.component';
import { ButtonComponent } from '@/components/atoms/button/button.component';
import { SwitchComponent } from '@/components/atoms/switch/switch.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUserDataLogin } from 'interfaces/user';

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
