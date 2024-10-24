import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router: any;

  navigate(){
    this.router.navigate(["signup"])
  }
  navigate(){
    this.router.navigate(["login"])
  }

}
