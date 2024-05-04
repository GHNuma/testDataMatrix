import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
];
