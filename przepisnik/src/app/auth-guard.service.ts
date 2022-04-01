import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { ApiserviceService } from './apiservice.service';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  private switch: boolean = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    // const abc = this.authService.authorized$
    //   .pipe(
    //     tap((v) => {
    //       if (v) {
    //         console.log(v);
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     })
    //   )
      // .subscribe((f) => {
      //   console.log(f, 'abc w gardzie');
      // });
    // return false;
    return this.authService.authorized$.pipe(
      take(1),
      map( (user)=> {
        return !!user
      }),
      tap((canActivate) => {
        if(!canActivate){
          this.router.navigate(['login'])
        }
      })
    )
  }
}

// const truthy = this.authService.authorizedValue();
// if(truthy === true){
//   console.log('asdas');
//   return true
// } else {
//   return false
// }
