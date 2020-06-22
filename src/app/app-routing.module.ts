import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { GoodsComponent } from './goods/goods.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes =
 [
  { path:'' , component : HomeComponent},
   {path:'cart' ,component : CartComponent },
   {path:'login' ,component : LoginComponent },
   {path:'goods' ,component : GoodsComponent },
   {path:'signup' ,component : SignupComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
