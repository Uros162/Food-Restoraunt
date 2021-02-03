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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    AuthenticationComponent,
    HeaderComponent,
    WelcomeComponent,
    RestaurantComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [AuthenticationService,RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
