import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{FormsModule} from '@angular/forms';
import{FlashMessagesModule} from 'angular2-flash-messages';
import {DataServicesService} from './services/ITServices.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCComponent } from './form-c/form-c.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FormCComponent
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
