import { MenuMobileItemComponent } from '@/components/atoms/menu-mobile-item/menu-mobile-item.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  imports: [MenuMobileItemComponent],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
})
export class MenuMobileComponent {
  currentRoute: string = '';

  constructor(private readonly router: Router) {
    this.currentRoute = this.router.url;
  }
}
