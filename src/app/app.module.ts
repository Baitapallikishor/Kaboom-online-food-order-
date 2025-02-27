import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ItemlogoComponent } from './itemlogo/itemlogo.component';
import { TagsComponent } from './tags/tags.component';

import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';
import { CartComponent } from './cart/cart.component';
import { BiryaniListComponent } from './biryani-list/biryani-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivityComponent } from './activity/activity.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewComponent } from './review/review.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ItemlogoComponent,
    TagsComponent,

    FoodpageComponent,
    LoginComponent,
    WelcomeComponent,
    SettingsComponent,
    CartComponent,
    BiryaniListComponent,
    ProfileComponent,
    ActivityComponent,
    OrderComponent,
    PaymentComponent,
    ReviewComponent,
    AccountSettingsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
