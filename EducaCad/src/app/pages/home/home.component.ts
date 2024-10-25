import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CustomButtonComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router: any;

  test() {
    console.log("hello World");
  }

  hello() {
    alert("FUNCIONANDO");
  }

}
