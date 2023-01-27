import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css'],
})
export class SingleContactComponent {
  @Input() person: any;
  constructor() {}
}
