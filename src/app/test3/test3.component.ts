import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component {
  @Output() sendData3 = new EventEmitter<{ title: string; author: string }[]>();
  constructor() {}
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
}
