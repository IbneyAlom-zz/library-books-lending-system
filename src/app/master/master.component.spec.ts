import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterComponent } from './master.component';
import { ReturnBookComponent } from '../return-book/return-book.component';
import { BookListComponent } from '../book-list/book-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartComponent } from '../book-list/cart/cart.component';

describe('MasterComponent', () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterComponent, ReturnBookComponent, BookListComponent, CartComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
