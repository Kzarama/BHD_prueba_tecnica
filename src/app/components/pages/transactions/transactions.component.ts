import { LayoutAccountComponent } from '@/components/templates/layout-account/layout-account.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [LayoutAccountComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {}
