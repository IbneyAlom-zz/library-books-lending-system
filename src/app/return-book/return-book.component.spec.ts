import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBookComponent } from './return-book.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ReturnBookComponent', () => {
  let component: ReturnBookComponent;
  let fixture: ComponentFixture<ReturnBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnBookComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
