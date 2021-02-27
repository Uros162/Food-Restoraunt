import { OrderDetailsComponent } from "./components/order-details/OrderDetailsComponent";
import { OrderService } from './services/order/order.service';
import { RestaurantService } from './services/restaurant/restaurant.service';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomerComponent } from './components/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { CustomerPanelComponent } from './components/customer-panel/customer-panel.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdressesComponent } from './components/adresses/adresses.component';
import { CustomerDataComponent } from './components/customer-data/customer-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './components/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    AuthenticationComponent,
    HeaderComponent,
    WelcomeComponent,
    RestaurantComponent,
    CustomerPanelComponent,
    OrderDetailsComponent,
    MyOrdersComponent,
    AdressesComponent,
    CustomerDataComponent,
    RatingComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  providers: [AuthenticationService,RestaurantService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
