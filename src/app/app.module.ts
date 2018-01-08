import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";

import { appRoutes } from './app.routes';
import { environment } from './../environments/environment';

import { LayoutModule } from "./layout/layout.module";

import { PagesModule } from "./pages/pages.module";

import { ServicesModule } from "./services/services.module";

import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(environment.firebase),
    // MaterialModule,
    FormsModule,
    LayoutModule,
    PagesModule,
    ServicesModule
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [ ]
})
export class AppModule { }