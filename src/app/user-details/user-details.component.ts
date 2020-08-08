import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userForm: FormGroup;
  submitted: boolean;
  numbers: any;
  returnDate: any = '';
  showMsg:boolean = false;
  @Output() emptyCart: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.numbers = Array(30).fill(0).map((e, i) => i + 1);
  }

  get f() {
    return this.userForm.controls;
  }

  ngOnInit() {
    this.submitted = false;

    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      membershipNo: ['', [Validators.required]],
      duration: ['', [Validators.required]]
    });
  }
  changeDate(ev) {
    const noOfDays = ev.target.value;
    const dateReturn = new Date();
    const today = new Date();
    dateReturn.setDate(today.getDate() + parseInt(noOfDays));
    const dd = dateReturn.getDate();
    const mm = dateReturn.getMonth() + 1;
    const y = dateReturn.getFullYear();
    this.returnDate= dd + '/' + mm + '/' + y;

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
