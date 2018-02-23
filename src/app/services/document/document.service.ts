import { Document } from './../../typedef/document';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentService {

  constructor(
    private _fireStore: AngularFirestore
  ) { }

  public get $documents(){
    return this._fireStore.collection('documents').valueChanges() as Observable<Document[]>;
  }
}
