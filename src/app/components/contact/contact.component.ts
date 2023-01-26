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
  isProfile: boolean;
  constructor(
    private renderGuests: TestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.guests = this.renderGuests.renderGuests();
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true;
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.guest = this.renderGuests.renderGuestsByI(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
      console.log('guests', this.guests);
      console.log('guests id', this.route.snapshot.paramMap.get('id'));
    } else {
      this.isProfile = false;
      this.guests = this.renderGuests.renderGuests();
    }
  }
}
