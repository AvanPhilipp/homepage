import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { EventService } from './event/event.service';
import { AuthService } from './auth/auth.service';
import { environment } from './../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CommonModule
  ],
  providers: [
    AuthService,
    EventService
  ],
  exports: [ ],
  declarations: []
})
export class ServicesModule { }
