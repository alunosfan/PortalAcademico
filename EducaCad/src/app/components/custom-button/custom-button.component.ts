import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'CustomButton',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() label: string = 'button';
  
  @Output() action = new EventEmitter<void>();

  onClick() {
    this.action.emit();
  }

}
