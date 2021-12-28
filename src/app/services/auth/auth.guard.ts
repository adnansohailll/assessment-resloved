import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private authServices:AuthService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

      // Check if user logged in
      // if (localStorage.getItem('user')) {
      if (this.authServices.isLoggedIn) {

        // if(route.url[0]?.path == 'login') {
        //   this.router.navigate(['admin']);
        // }

        // Check if user have permission to load posts view
        if(route.url[0]?.path == 'posts' && !this.hasPermission('catalog.read')) {
          return false;
        }
        // Check if user have permission to load users view
        if(route.url[0]?.path == 'users' && !this.hasPermission('user.read')) {
          return false;
        }

        return true;
      } else {
        // Return to login page if user not logged in
        this.router.navigate(['login']);
      }
  }

  hasPermission(permission: string) {
    const permissions = JSON.parse(localStorage.getItem('permissions') || '[]');
    return permissions.includes(permission);
  }
  
}
