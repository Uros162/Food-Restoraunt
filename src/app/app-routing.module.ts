import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RegisterComponent } from './components/register/register.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Restaurant } from './models/restaurant';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  { path:'login',component: LoginComponent},
  { path:'register',component: RegisterComponent},
  { path:'customer',component: CustomerComponent},
  { path:'auth',component: AuthenticationComponent},
  { path:'welcome',component: WelcomeComponent},
  { path:'restaurant',component: RestaurantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
