import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { DateTimePickerModule } from 'ng-pick-datetime';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SecretComponent } from './components/secret/secret.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { DatepickerComponent } from './parts/datepicker/datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SecretComponent,
    HeaderComponent,
    FooterComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    DateTimePickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    DatepickerComponent
  ]

})
export class AppModule { }