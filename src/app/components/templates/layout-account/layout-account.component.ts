import { HeaderComponent } from '@/components/molecules/header/header.component';
import { MenuMobileComponent } from '@/components/molecules/menu-mobile/menu-mobile.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-account',
  imports: [HeaderComponent, MenuMobileComponent],
  templateUrl: './layout-account.component.html',
  styleUrl: './layout-account.component.scss',
})
export class LayoutAccountComponent {
  @Input() title = '';
  @Input() variant: 'transparent' | 'white' = 'transparent';
}
