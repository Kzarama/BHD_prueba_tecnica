import { ButtonComponent } from '@/components/atoms/button/button.component';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [ButtonComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  step = 1;
  @Output() cerrar = new EventEmitter<void>();

  nextStep() {
    this.step++;
    if (this.step === 4) {
      this.cerrar.emit();
    }
  }
}
