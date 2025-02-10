import { Routes } from '@angular/router';

import { authGuard } from '@/core/guards/auth.guard';
import { BranchesComponent } from '@/domains/branches/branches.component';
import { ConfigurationComponent } from '@/domains/configuration/configuration.component';
import { ContactComponent } from '@/domains/contact/contact.component';
import { DashboardComponent } from '@/domains/products/ui/pages/dashboard/dashboard.component';
import { OffersComponent } from '@/domains/products/ui/pages/offers/offers.component';
import { ProductDetailComponent } from '@/domains/products/ui/pages/product-detail/product-detail.component';
import { TransactionsComponent } from '@/domains/products/ui/pages/transactions/transactions.component';
import { LoginComponent } from '@/domains/users/ui/pages/login/login.component';
import { NotFoundComponent } from '@/shared/ui/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    title: 'Sucursales',
    path: 'branches',
    component: BranchesComponent,
  },
  {
    title: 'Contacto',
    path: 'contact',
    component: ContactComponent,
  },
  {
    title: 'Mis productos',
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    title: 'Login',
    path: '',
    component: LoginComponent,
  },
  {
    title: 'Transacciones',
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [authGuard],
  },
  {
    title: 'Ofertas',
    path: 'offers',
    component: OffersComponent,
    canActivate: [authGuard],
  },
  {
    title: 'Configuración',
    path: 'configuration',
    component: ConfigurationComponent,
    canActivate: [authGuard],
  },
  {
    title: 'Producto',
    path: 'product_detail/:id',
    component: ProductDetailComponent,
    canActivate: [authGuard],
  },
  {
    title: 'Error',
    path: '**',
    component: NotFoundComponent,
  },
];
