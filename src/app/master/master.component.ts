import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  showPopup: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openModal(){
    this.showPopup = true;
  }
  closeModal(){
    this.showPopup = false;
  }

}
