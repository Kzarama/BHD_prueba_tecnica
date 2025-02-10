import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { UserDataService } from '@/domains/users/infrastructure/services/user-data.service';
import { IUserData } from 'app/core/interfaces/user';
import { LayoutAccountComponent } from '@/shared/ui/templates/layout-account/layout-account.component';
import { ProductSectionComponent } from '../../organisms/product-section/product-section.component';

@Component({
  selector: 'app-dashboard',
  imports: [LayoutAccountComponent, ProductSectionComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  userData: IUserData | null = null;

  constructor(readonly userService: UserDataService) {
    userService.getUserData().subscribe({
      next: (data) => {
        this.userData = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
