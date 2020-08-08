import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import *  as  data from "../../assets/json/data.json";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: any = (data as any).default;
  addedBook: any = [];
  showPopup: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onChange(value) {
    if (value) {
      this.bookList = this.bookList.filter(element => element.isAvailable == "Y");
    } else this.bookList = (data as any).default;
  }

  addToCart(book) {
    if(this.addedBook.length>=5 ){
      alert("Maximum Limit exceeds");
      return;
    }
    if(!this.addedBook.includes(book)){
      this.addedBook.push(book)
    } else alert("Already added")
    
  }
  removedBook(event) {
    const index = this.addedBook.indexOf(event);
    if (index > -1) {
      this.addedBook.splice(index, 1);
    }
  }
  emptyCart(ev){
    if(ev){
      this.addedBook = [];
    }
  }

  lendingModal(){
    this.showPopup = true;
  }
  closeModal(){
    this.showPopup = false;
  }
  openFromCart(ev){
    if(ev){
      this.showPopup =true;
    }
  }

}
