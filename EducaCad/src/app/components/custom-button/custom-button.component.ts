import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'CustomButton',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() label: string = 'button';
  @Input() textColor: string = '#ffffff';
  @Input() backgroundColor: string = '#007bff';
  @Input() borderRadius: string = '10px';
  @Input() height: string = '50px';  
  @Input() fontSize: string = '16px';
  @Input() width: string = '100%';
  @Output() action = new EventEmitter<void>();

  onClick() {
    this.action.emit();
  }

}
