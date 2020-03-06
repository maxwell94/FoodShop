import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  /** Crea una nuova entità product da inserire nel db */
  create(product){
     return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products');
  }
}
