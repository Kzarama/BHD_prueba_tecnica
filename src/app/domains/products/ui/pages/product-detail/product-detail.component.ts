import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDataService } from '@/domains/users/infrastructure/services/user-data.service';
import { AccountType, CardType } from 'app/core/interfaces/user';
import { LayoutAccountComponent } from '@/shared/ui/templates/layout-account/layout-account.component';
import { ProductCardComponent } from '../../molecules/product-card/product-card.component';

@Component({
  selector: 'app-product-detail',
  imports: [LayoutAccountComponent, ProductCardComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  id: string | null = null;
  productData: AccountType | CardType | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    readonly userService: UserDataService
  ) {
    userService.searchProduct('1').subscribe({
      next: (data) => {
        this.productData = data;
      },
    });

    route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }
}
