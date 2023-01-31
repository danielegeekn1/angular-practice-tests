import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeform: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.homeform = new FormGroup({
      name: new FormControl('Daniele'),
      surname: new FormControl(),
      color: new FormControl(),
    });
  }
  onSubmit(form: NgForm) {
    console.log('form', form);
  }
  onSubmitR() {
    console.log(this.homeform);
  }
}
