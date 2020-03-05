import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth:AuthService,private userService:UserService) {
  }

  canActivate():Observable<boolean> {
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }


}
