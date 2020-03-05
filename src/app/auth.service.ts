import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute) { 
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
}
