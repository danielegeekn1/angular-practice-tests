import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnInit {
  @Output() sendData3 = new EventEmitter<{ title: string; author: string }[]>();
  constructor(private serviceTest: TestService) {}
  games = [
    {
      title: 'Splendor',
      author: 'Marc Andrè',
    },
    {
      title: 'Risk',
      author: 'Albert Lamorisse',
    },
  ];

  sendDataToParent() {
    this.sendData3.emit(this.games);
  }
  ngOnInit(): void {
    console.log(this.serviceTest.guests);
  }
}
