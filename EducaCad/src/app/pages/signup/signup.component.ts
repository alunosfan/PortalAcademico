import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { LogoEducaCadBlueComponent } from '../../icons/logo-educa-cad-blue/logo-educa-cad-blue.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmptyStateSignUpComponent } from '../../icons/empty-state-sign-up/empty-state-sign-up.component';
import { CustomCheckboxComponent } from '../../components/custom-checkbox/custom-checkbox.component';

interface SignUpForm {
  name: FormControl,
  surname: FormControl,
  email: FormControl,
  password: FormControl,
  confirmPassword: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CustomButtonComponent,
    CustomInputComponent,
    CommonModule,
    LogoEducaCadBlueComponent,
    ReactiveFormsModule,
    EmptyStateSignUpComponent,
    CustomCheckboxComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm!: FormGroup<SignUpForm>;

  constructor(
    private router: Router,
    // private loginService: LoginService,
    // private toastService: ToastrService
  ){
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  checkboxOptions = [
    { label: 'Sou Professor', value: 'professor' },
    { label: 'Sou Aluno', value: 'aluno' }
  ];
  selectedRole = 'professor';

  onRoleChange(newRole: string): void {
    this.selectedRole = newRole;
    console.log('Role changed to:', newRole);
  }


  openSuport(){
    this.router.navigate(["suport"])
  }
  openLogin(){
    this.router.navigate(["login"])
  }
  openDashboard(){
    this.router.navigate(["dashboard"])
  }
}
