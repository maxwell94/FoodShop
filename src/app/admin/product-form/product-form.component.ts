import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  categories$; 
  constructor(private categoryService:CategoryService,private productsService:ProductService) {
     this.categories$ = categoryService.getCategories();
   }

   /** Metodo che salva i dati dal form admin product nel db */
   save(product){
     //console.log(product);
     this.productsService.create(product);
   }

  ngOnInit() {
  }

}
