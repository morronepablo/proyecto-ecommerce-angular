import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public editCart: any = {cart: 0, products: []};
  public subject = new Subject<any>();

  private cartSource = new BehaviorSubject(this.editCart);
  currentCart = this.cartSource.asObservable();
  updateCart(item) {
    this.cartSource.next(item);
  }


  //-----Old
  // public editDataDetails: any = [];
  // public subject = new Subject<any>();

  // private messageSource = new BehaviorSubject(this.editDataDetails);
  // currentMessage = this.messageSource.asObservable();
  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }
}
