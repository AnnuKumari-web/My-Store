import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { SellerDashboardComponent } from './component/seller-dashboard/seller-dashboard.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'logout', component: LogoutComponent
  },
  {
    path:'admin', component: AdminDashboardComponent
  },
  {
    path:'customer', component: CustomerDashboardComponent
  },
  {
    path:'seller', component: SellerDashboardComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'productList', component: ProductListComponent
  },
  { 
    path: 'products/:productId', component: ProductDetailsComponent 
  },
  { 
    path: 'cart', component: CartComponent 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
