import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CommonModule } from '@angular/common';
import { LogoEducaCadComponent } from '../../icons/logo-educa-cad/logo-educa-cad.component';
import { DoneManImageComponent } from '../../icons/done-man-image/done-man-image.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CustomButtonComponent,
    CommonModule,
    LogoEducaCadComponent,
    DoneManImageComponent,
    
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}
  
  openLogin(){
    this.router.navigate(["login"])
  }
  openSingUp(){
    this.router.navigate(["signup"])
  }
}
