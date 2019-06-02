import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  test:string;

  constructor(private service: AuthService, private router: Router) { }

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot){
   return  this.service.isAuthentucated().then(res => {
      if(res) return true;
      else this.router.navigate(['/']);
    });
  }
}
