import { Character } from './../../models/character.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { TestBed, inject } from '@angular/core/testing';

import { SecretService } from './secret.service';

describe('SecretService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SecretService,
        AngularFireModule,
        AngularFireDatabase,
        FirebaseApp
      ]
    });
  });

  it('should be created', inject([SecretService], (service: SecretService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should have characters',inject([SecretService], (service: SecretService)=>{
    expect(service.characters).toBeDefined();
  }));
});
