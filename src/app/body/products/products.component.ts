import { Component, OnInit } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedMessage: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => (this.selectedMessage = message));
  }

  add2cart(item) {

    this.selectedMessage++;
    //Set value in component 1
    this.dataService.changeMessage(this.selectedMessage);
  }

}
