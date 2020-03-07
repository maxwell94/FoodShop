import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  /** Crea un prodotto da inserire alla lista dei prodotti nel db */
  create(product){
     return this.db.list('/products').push(product);
  }

  /**ottengo tutti i prodotti dal db */
  getAll(){
    return this.db.list('/products');
  }
  
  /** ottengo un prodotto tra tutti i prodotti */
  get(productId){
    return this.db.object('/products/'+productId);
  }

  /**Aggiorna un prodotto */
  update(productId, product){
    return this.db.object('/products/'+productId).update(product);
  }

  /**Cancella un prodotto */
  delete(productId){
    return this.db.object('/products/'+productId).remove();
  }

}
