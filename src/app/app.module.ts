import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{FormsModule} from '@angular/forms';
import{FlashMessagesModule} from 'angular2-flash-messages';
import {DataServicesService} from './services/ITServices.service';
//import {HttpModule} from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCComponent } from './form-c/form-c.component';
import { from } from 'rxjs';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
