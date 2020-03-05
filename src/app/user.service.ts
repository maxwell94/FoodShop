import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) {
    
  }
  
  /** Questo metodo aggiorna un utente dentro il db */
  save(user : firebase.User)
  {
    this.db.object('/users/' + user.uid).update({
      name : user.displayName,
      email : user.email,
      isAdmin: false
    });
  }

  get(uid: string):FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
