import { Component, Input } from '@angular/core';

import { HeaderComponent } from '../../molecules/header/header.component';
import { MenuMobileComponent } from '../../molecules/menu-mobile/menu-mobile.component';

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
