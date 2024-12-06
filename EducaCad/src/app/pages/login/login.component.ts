import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { LogoEducaCadBlueComponent } from '../../icons/logo-educa-cad-blue/logo-educa-cad-blue.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CustomButtonComponent,
    CustomInputComponent,
    CommonModule,
    LogoEducaCadBlueComponent,
    ReactiveFormsModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    // private loginService: LoginService,
    // private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }  
  openSuport(){
    this.router.navigate(["suport"])
  }
  openSingUp(){
    this.router.navigate(["signup"])
  }
}
