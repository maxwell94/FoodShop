import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  categories$; 
  product={};

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductService,
    private route: ActivatedRoute) {
     this.categories$ = categoryService.getCategories();

     let id = this.route.snapshot.paramMap.get('id');
     if (id) this.productsService.get(id).take(1).subscribe(p => this.product = p);
   }

   /** Metodo che salva i dati dal form admin product nel db */
   save(product){
     //console.log(product);
     this.productsService.create(product);
   }

  ngOnInit() {
  }

}
