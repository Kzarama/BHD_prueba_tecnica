import { Component, EventEmitter, Output } from '@angular/core';

import { ButtonComponent } from '@/shared/ui/atoms/button/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-demo',
  imports: [ButtonComponent, NgOptimizedImage],
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
