import { Component, OnInit } from '@angular/core';
import { DataService } from '../../share/data.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // [x: string]: any;
  cart: any;
  products;

  constructor(
    private dataService:DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.dataService.currentCart.subscribe(editCart => (this.cart = editCart));

    this.getProduct();

  }

  async getProduct() {
    try {
      const response = await axios.get('assets/data/products.json');
      console.log('response.data-', response.data);
      console.log('response.status-', response.status);
      this.products = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  add2cart(qty,product) {

    //this.cart++;
    this.cart.products.push(product);
    this.cart.cart = this.cart.cart + qty;
    //let tmpCart = {cart: this.cart.cart + item, products: []};
    //Set value in component 1
    this.dataService.updateCart(this.cart);

    console.log('this.cart---> ', this.cart);

  }

  bynow() {
    this.router.navigate(["cart"]);
  }

}
