import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 product:any;
 dining:any;
  constructor(private service:ProductService) { }

  ngOnInit()
  {
    this.display_products();
    
  }

  display_products()
  {
    this.service.getAllBeds().subscribe(
      response=>{
            console.log(response.json());
            this.product=JSON.parse(response.json());
            console.log(this.product);
            this.display_products();
      },
      error=>
      {
        console.log("Not able to load products");
      }
  );


  this.service.getAllTables().subscribe(
    response=>{
          console.log(response.json());
          this.dining=JSON.parse(response.json());
          console.log(this.dining);
          this.display_products();
    },
    error=>
    {
      console.log("Not able to load products");
    }
);

      
  }

}
