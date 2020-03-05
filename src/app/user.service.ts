import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) {
    
  }
  
  /** Questo metodo aggiorna un utente dentro il db */
  save(user : firebase.User)
  {
    this.db.object('/users/' + user.uid).set({
      name : user.displayName,
      email : user.email
    });
  }
}
