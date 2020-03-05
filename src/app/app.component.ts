import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   constructor(private auth:AuthService, router:Router, private userService:UserService){

    /** Quando login fa il login , usiamo il localStorage per reindirizzarlo dove 
     * vuole
     */
     auth.user$.subscribe( user => {
       if(user) {
        
         /** salva , aggiorna l'utente che si è appena loggato nel db */
         userService.save(user);
          
         let returnUrl = localStorage.getItem('returnUrl');
         router.navigateByUrl(returnUrl);
       }
     });
   }
}
