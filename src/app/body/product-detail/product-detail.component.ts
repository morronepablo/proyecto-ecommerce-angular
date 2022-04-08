import { Component, OnInit } from '@angular/core';
import { DataService } from '../../share/data.service';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  [x: string]: any;

  cart: any; products; product; slug;
  qtyDefault=1;
  pImageDefault='blank.jpg';
  pImages=['blank.jpg'];

  constructor(
    private dataService:DataService,
    private router: Router,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      console.log('this.slug--->', this.slug);
    });

    this.dataService.currentCart.subscribe(editCart => (this.cart = editCart));

    this.getProductOne(this.slug);
  }

  async getProductOne(slug) {
    try {
      const response = await axios.get('assets/data/products.json');
      console.log('response.data-', response.data);
      console.log('response.status-', response.status);
      this.products = response.data;

      if(this.products.findIndex(obj => obj.pSlug === slug) > 0 ) {
        this.product = this.products[this.products.findIndex(obj => obj.pSlug === slug)];
        console.log('this.product-', this.product );
        this.pImageDefault = this.product.pImageDefault;
        this.pImages = this.product.pImages;
      } else {

      }


    } catch (error) {
      console.error(error);
    }
  }

  add2cart(qty,product) {
    let n=0;
    for(n; n<qty; n++) {
      this.cart.products.push(product);
    }
    this.cart.cart = this.cart.cart + qty;
    //let tmpCart = {cart: this.cart.cart + item, products: []};
    //Set value in component 1
    this.dataService.updateCart(this.cart);

    console.log('this.cart---> ', this.cart);

  }

  bynow() {
    this.router.navigate(["cart"]);
  }

  minus() {
    console.log('minus');
    if(this.qtyDefault > 1) {
      this.qtyDefault--;
    }

  }

  plus() {
    console.log('plus');
    this.qtyDefault++;
  }

}
