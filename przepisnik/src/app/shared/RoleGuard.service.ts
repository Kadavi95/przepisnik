import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
} from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Roles } from './Roles';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const canActivateRoles = route.data['roles'] as Roles[];

    return this.authService.authorized$.pipe(map(({class}) => canActivateRoles.includes(role)), tap(canActivate => {
      if (canActivate) {
        return;
      }

      alert('Ta opcja dostepna jest dla użytkowiników o roli: ' + canActivateRoles.join(', '))
    }));
  }
}
