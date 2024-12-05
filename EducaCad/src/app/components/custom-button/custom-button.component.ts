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
  @Input() fontWeight: string = '800';  
  @Input() fontSize: string = '16px';
  @Input() padding: string = '10px 30px';
  @Output() action = new EventEmitter<void>();

  onClick() {
    this.action.emit();
  }

}
