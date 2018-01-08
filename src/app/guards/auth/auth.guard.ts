import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService
  ){ }



  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this._authService.$user.map((user)=>{
        if(user) return true;
        else{
          return false;
        }
      })
  }
}
