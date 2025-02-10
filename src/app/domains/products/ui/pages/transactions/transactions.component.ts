import { Component } from '@angular/core';

import { LayoutAccountComponent } from '@/shared/ui/templates/layout-account/layout-account.component';

@Component({
  selector: 'app-transactions',
  imports: [LayoutAccountComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {}
