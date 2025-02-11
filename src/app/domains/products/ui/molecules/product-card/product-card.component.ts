import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CurrencyPipe } from '../../../infrastructure/pipes/currency.pipe';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() data: any;
  @Input() variant: 'account' | 'card' = 'account';
}
