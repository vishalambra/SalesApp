import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import {Router} from '@angular/router';
@Injectable()
export class AuthPublicGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn()){
      this.myRoute.navigate(['private/team'])
      return false;
    }
    else
    {
      return true;
    }
  }
}