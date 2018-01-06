import { EventService } from './event/event.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EventService
  ],
  exports: [ ],
  declarations: []
})
export class ServicesModule { }
