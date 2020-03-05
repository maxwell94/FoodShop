import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth) { 
     this.user$ = afAuth.authState;
  }
  
  /** Metodo che permette allo user di fare login  */
  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

   /** Metodo che permette allo user di fare logout  */
  logout(){
    this.afAuth.auth.signOut();
  }
}
