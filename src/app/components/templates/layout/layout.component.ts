import { Component, Input } from '@angular/core';
import { HeaderComponent } from '@/components/molecules/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() title = '';
  @Input() variant: 'transparent' | 'white' = 'transparent';
}
