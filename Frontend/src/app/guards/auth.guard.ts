import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { from, Observable } from 'rxjs';

import { GetusuariosService } from '../servicios/getusuarios.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: GetusuariosService, private router: Router){}

  canActivate(){

    if (this.authService.get_currentuser()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;

    }
  }

 /* canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  
}
