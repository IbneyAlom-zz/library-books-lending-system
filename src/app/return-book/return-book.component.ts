import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss']
})
export class ReturnBookComponent implements OnInit {

  userForm: FormGroup;
  submitted: boolean;
  showMsg:boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.userForm.controls;
  }

  ngOnInit() {
    this.submitted = false;

    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      membershipNo: ['', [Validators.required]],
    });
  }
  onUserSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    } else {
      this.showMsg = true;
      this.emptyCart.emit(true)
    }
  }

}
