import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{FormsModule} from '@angular/forms';
import{FlashMessagesModule} from 'angular2-flash-messages';
import {DataServicesService} from './services/ITServices.service';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCComponent } from './form-c/form-c.component';
import { from } from 'rxjs';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavebarComponent } from './navebar/navebar.component';
import { CartComponent } from './cart/cart.component';
import { GoodsComponent } from './goods/goods.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from'@angular/fire/firestore';
import{AngularFireAuthModule} from '@angular/fire/auth'
@NgModule({
  declarations: [
    AppComponent,
    FormCComponent,
    Page1Component,
    Page2Component,
    NavebarComponent,
    CartComponent,
    GoodsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAKqF47x9qjVgJUX1AEW7aeYzEEz5W5g6g",
      authDomain: "market-38586.firebaseapp.com",
      databaseURL: "https://market-38586.firebaseio.com",
      projectId: "market-38586",
      storageBucket: "market-38586.appspot.com",
      messagingSenderId: "404568949849",
      appId: "1:404568949849:web:29e100c8039b24d74c9d48",
      measurementId: "G-9MC8SWZ1Y6"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
