import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  /** Preleva dal db la lista delle categorie */
  getCategories(){
    return this.db.list('/categories',{
      query:{
        orderByChild:'name' /** ordina le categorie per la chiave che è name */
      }
    });
  }
}
