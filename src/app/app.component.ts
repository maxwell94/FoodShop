import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   constructor(private auth:AuthService, router:Router){

    /** Quando login fa il login , usiamo il localStorage per reindirizzarlo dove 
     * vuole
     */
     auth.user$.subscribe( user => {
       if(user) {
         let returnUrl = localStorage.getItem('returnUrl');
         router.navigateByUrl(returnUrl);
       }
     });
   }
}
