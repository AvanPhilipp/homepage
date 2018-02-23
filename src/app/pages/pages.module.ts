import { WelcomeComponent } from './welcome/welcome.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ArchivesComponent } from './archives/archives.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    WelcomeComponent,
    ArchivesComponent
  ],
  exports: [
    WelcomeComponent
  ]
})
export class PagesModule { }
