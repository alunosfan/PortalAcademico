import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'CustomInput',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
  }
  ],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent implements ControlValueAccessor{
  @Input() type: InputTypes = 'text';
  @Input() placeholder: string = '';
  @Input() backgroundColor: string = '#FFFFFF';
  @Input() height: string = '';
  @Input() width: string = '100%';
  @Input() borderRadius: string = '15px';
  @Input() border: string = '';

  value: string = ''
  onChage: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChage(value)
  }

  writeValue(value: any): void {
      this.value = value
  }

  registerOnChange(fn: any): void {
      this.onChage = fn
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn
  }

}
