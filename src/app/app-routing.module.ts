import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';
import { CartComponent } from './cart/cart.component';
import { BiryaniListComponent } from './biryani-list/biryani-list.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewComponent } from './review/review.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'loginpage',component:LoginComponent},  
  {path:'setting',component:SettingsComponent},
  {path:'cart',component:CartComponent},
  { path: 'biryani', component: BiryaniListComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'order', component: OrderComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'Review', component:ReviewComponent},
  {path: 'account-setting', component:AccountSettingsComponent},


  { path: '**', redirectTo: 'profile' } ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
