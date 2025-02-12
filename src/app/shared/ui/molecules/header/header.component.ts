import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title = '';
  @Input() variant: 'white' | 'transparent' = 'transparent';

  isActive = false;
  isAnimating: boolean = false;

  toggleActive = () => {
    if (this.isActive) {
      this.isAnimating = false;
      setTimeout(() => {
        this.isActive = false;
      }, 500);
    } else {
      this.isAnimating = true;
      this.isActive = true;
    }
  };
}
