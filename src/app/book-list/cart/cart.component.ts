import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() addedBook: any;
  @Output() removedBook: EventEmitter<any> = new EventEmitter<any>();
  @Output() userForm: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  removedBookFromCart(book){
    this.removedBook.emit(book);
  }
  openModal(){
    this.userForm.emit(true);
  }

}
