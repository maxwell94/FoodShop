import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { UserService } from './user.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  
  constructor(private userService:UserService, private afAuth: AngularFireAuth, private route:ActivatedRoute) { 
     this.user$ = afAuth.authState;
  }
  
  /** Metodo che permette allo user di fare login e memorizza dentro il 
   * localStorage l'url per reindirizzarlo
  */
  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

   /** Metodo che permette allo user di fare logout  */
  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$ ():Observable<AppUser> {
    return this.user$
    .switchMap(user => {
      if (user) return this.userService.get(user.uid) ;

      return Observable.of(null);
    })
  }
}
