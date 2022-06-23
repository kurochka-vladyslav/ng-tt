import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Product } from '../types/Product';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  visible = false;
  productList!: Product[];
  selectedProduct?: Product;

  constructor(private dataService: DataService) {
  }

  getProducts() {
    this.productList = this.dataService.getProducts();
  }

  setSelectedProduct(product:Product) {
    this.visible = true;

    this.selectedProduct = product;
  }

  ngOnInit(): void {
    this.getProducts()
  }

  closeDesk() {
    this.visible = false;
    this.selectedProduct = <Product>{};
  }
}

