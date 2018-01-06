import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

// import { MaterialModule } from './material/material.module';

import { LayoutModule } from "./layout/layout.module";

import { PagesModule } from "./pages/pages.module";

import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
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