import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(
    private _auth: AngularFireAuth
  ) { }

  public get $user(){
    return this._auth.authState;
  }

}
