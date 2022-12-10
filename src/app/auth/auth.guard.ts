import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, 
            private router: Router,
            private toast: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    let authenticated = this.authService.isAuthenticated();
    if(authenticated){
      return true;
    }
    else{
      this.router.navigate(['login']);
      this.toast.info('Logue novamente para acessar o sistema.', 'Logout', {timeOut: 10000})

      return false;
    }
  }
  
}
