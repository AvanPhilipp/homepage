import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { Character } from './../../models/character.model';

@Injectable()
export class SecretService {

  private _characters: Observable<Character[]>;

  constructor(private database: AngularFireDatabase) {
    this._characters = this.database.list('characters').valueChanges() as Observable<Character[]>;
  }

  get characters (){
    return this._characters;
  }
}
