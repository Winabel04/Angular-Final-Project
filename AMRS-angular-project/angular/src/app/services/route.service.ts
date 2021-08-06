import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService implements CanActivate{

  constructor(
      private location: Location,
      private router: Router
  ) { }
    credential: any
    getUser(){
        if (window.localStorage.getItem('credential')) {
            this.credential = window.localStorage.getItem('credential')
            return JSON.parse(this.credential).userType
        }else{
            return false;
        }
    }

    //for logout
  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.getUser()) {
        this.router.navigate(['landingPage'])
    }

    if (!this.hasAccess(route.data.role, this.getUser())) {
        this.location.back();
    }
    return this.hasAccess(route.data.role, this.getUser())
  }

  hasAccess(role: string, userType: string){
    return role === userType
  }
  
}
