import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() type: '' | 'submit' = '';
  @Input() disabled = false;
  @Input() variant: '' | 'border' | 'link' = '';
  @Output() action = new EventEmitter();

  onButtonClick() {
    this.action.emit();
  }
}
