import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products:any = [];
  public errorMsg:any;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService
      .getProducts()
      .subscribe({next:data => this.products = data,
        error:err => this.errorMsg = err});
  }

  

  addItem(id: number = this.products.id){
    console.log(id);
  }
}
