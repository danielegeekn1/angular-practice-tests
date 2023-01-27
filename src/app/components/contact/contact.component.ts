import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  guests: any;
  guest: any;
  // isProfile: boolean;
  constructor(private renderGuests: TestService) {}

  ngOnInit(): void {
    this.guests = this.renderGuests.renderGuests();
  }
}
