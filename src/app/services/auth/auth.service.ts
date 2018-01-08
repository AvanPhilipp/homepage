import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(
    private _auth: AngularFireAuth
  ) { }

  public get $user(){
    // console.log("Auth: ", this._auth.auth);
    return this._auth.authState// .subscribe(error=>{console.log(error)}) as Observable<firebase.User>;
  }

}
