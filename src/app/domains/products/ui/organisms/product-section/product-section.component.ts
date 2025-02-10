import { Component, Input } from '@angular/core';

import { ProductCardComponent } from '../../molecules/product-card/product-card.component';

@Component({
  selector: 'app-product-section',
  imports: [ProductCardComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss',
})
export class ProductSectionComponent {
  @Input() variant: 'account' | 'card' = 'account';
  @Input() productData: any;
}
