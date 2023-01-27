import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css'],
})
export class SingleContactComponent implements OnInit {
  guest: any;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private renderGuests: TestService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.guest = this.renderGuests.renderGuestsByI(this.id);
    });
  }
}
