import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeform: FormGroup;
  constructor(private firebase: FirebaseService) {}
  ngOnInit(): void {
    this.homeform = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      color: new FormControl(),
    });
  }
  onSubmit(form: NgForm) {
    console.log('form', form);
  }
  onSubmitR() {
    console.log(this.homeform);
    this.firebase
      .insertClient(
        'https://angular-course-db71f-default-rtdb.europe-west1.firebasedatabase.app/persons.json',
        { name: this.homeform.value.name, email: this.homeform.value.email }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  onDeleteClient() {
    this.firebase
      .deleteClient(
        'https://angular-course-db71f-default-rtdb.europe-west1.firebasedatabase.app/persons',
        '-NNfj0nrjjjhXfaIcRnk'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
