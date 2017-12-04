import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { Character } from './../../models/character.model';

@Injectable()
export class SecretService {

  _characters: Observable<Character[]>;

  constructor(database: AngularFireDatabase) {
    this._characters = database.list('characters').valueChanges() as Observable<Character[]>;
  }

  get characters (){
    return this._characters;
  }
}
