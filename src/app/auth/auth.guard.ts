import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {

        let token =  localStorage.getItem("token")
        console.log("token", token)
        if(token !== null)
        {
            console.log("user is logged in")
            //this.router.navigate(["/language"])
            return true
        }else{
            console.log("user is not logged in")
            this.router.navigate([""])
            return false
        }
    }

}
