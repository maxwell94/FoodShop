import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  categories$; 
  product={};
  id;

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
     this.categories$ = categoryService.getCategories();

     this.id = this.route.snapshot.paramMap.get('id');
     if (this.id) this.productsService.get(this.id).take(1).subscribe(p => this.product = p);
   }

   /** Metodo che salva o aggiorna i product nel db */
   save(product){
     //console.log(product);
     if (this.id) this.productsService.update(this.id,product); // esiste l'id aggiorna
     else this.productsService.create(product); //altrimenti lo crea 

     this.router.navigate(['/admin/products']);
   }
   
   /**Metodo che cancella  */
   delete(){
      if( !confirm('Are you sure you want to delete this product?')) return; 
      this.productsService.delete(this.id);
      this.router.navigate(['/admin/products']);
      
   }

  ngOnInit() {
  }

}
