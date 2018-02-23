import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";

import { EventService } from './event/event.service';
import { AuthService } from './auth/auth.service';
import { DocumentService } from './document/document.service';

import { environment } from './../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    CommonModule
  ],
  providers: [
    AuthService,
    EventService,
    DocumentService
  ],
  exports: [ ],
  declarations: []
})
export class ServicesModule { }
