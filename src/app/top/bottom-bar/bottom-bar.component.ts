import { Component, OnInit } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
  selectedMessage: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    //Set value default for test
    this.dataService.changeMessage("1");

    this.dataService.currentMessage.subscribe(message => (this.selectedMessage = message));
  }

}
