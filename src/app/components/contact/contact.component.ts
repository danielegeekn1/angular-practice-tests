import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  guests: any;
  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    // this.guests = this.renderGuests.renderGuests();
    this.firebase
      .getClient(
        'https://angular-course-db71f-default-rtdb.europe-west1.firebasedatabase.app/persons.json'
      )
      .subscribe((data: any) => {
        console.log(data);
        this.guests = Object.keys(data).map((key) => {
          console.log(key); //refering to the property for each client data we add
          //so since we didn't add it/ the random id generated from firebase
          data[key]['id'] = key; // to add the random id to our key we then return
          return data[key];
        });
        console.log(this.guests);
      });
  }
  onDeleteClient(id: any) {
    this.firebase
      .deleteClient(
        'https://angular-course-db71f-default-rtdb.europe-west1.firebasedatabase.app/persons',
        //'-NNfj0nrjjjhXfaIcRnk'
        id
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
