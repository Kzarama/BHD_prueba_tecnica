import { ProductSectionComponent } from '@/components/organisms/product-section/product-section.component';
import { LayoutAccountComponent } from '@/components/templates/layout-account/layout-account.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserDataService } from 'app/services/user-data.service';
import { IUserData } from 'interfaces/user';

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
