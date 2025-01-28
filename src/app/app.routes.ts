import { Routes } from '@angular/router';
import { BranchesComponent } from './components/pages/branches/branches.component';
import { ConfigurationComponent } from './components/pages/configuration/configuration.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { TransactionsComponent } from './components/pages/transactions/transactions.component';
import { authGuard } from './guards/auth.guard';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';

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
