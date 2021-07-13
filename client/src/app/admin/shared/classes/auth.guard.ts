import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,CanActivateChild, Router, RouterStateSnapshot} from '@angular/router'
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private auth:AuthService,
                private router: Router
        ){

    }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
        //proverka zaregan ili net polzovatel
        if(this.auth.isAuthenticated()){
            console.log("123")
            return of(true)
        }else{
            this.router.navigate(['admin/login'],{
                queryParams:{
                    accessDenied:true
                }
            })
            return of(false)
        }
    }

    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
        return this.canActivate(route, state);
    }
}