import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private renderGuests: TestService) {}
  guests: any;
  ngOnInit(): void {
    this.guests = this.renderGuests.renderGuests();
  }
}
