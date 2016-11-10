import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Meteor } from 'meteor/meteor';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        if(Meteor.userId) {
            return true;
        } else{
            this.router.navigate(['/login']);
            return false
        }
    }
}