import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import {Router} from '@angular/router';
@Injectable()
export class AuthPrivateGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router){
  }

  // auth guard implementation
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn()){
      
      return true;
    }
    else
    {
      this.myRoute.navigate(['login']);
      return false;
    }
  }
}
