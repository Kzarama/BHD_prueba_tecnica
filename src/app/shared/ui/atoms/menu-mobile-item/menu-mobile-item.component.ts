import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-mobile-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-mobile-item.component.html',
  styleUrl: './menu-mobile-item.component.scss',
})
export class MenuMobileItemComponent {
  @Input() route = '';
  @Input() icon = '';
  @Input() text = '';

  currentRoute: string = '';

  constructor(private readonly router: Router) {
    this.currentRoute = this.router.url;
  }
}
