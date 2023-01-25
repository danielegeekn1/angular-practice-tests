import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-from-scratch';
  singers = [
    {
      name: 'Jon Bon Jovi',
      age: 60,
      isOnline: true,
      color: 'green',
    },
    {
      name: 'Gianni Morandi',
      age: 78,
      isOnline: true,
      color: 'green',
    },
    {
      name: 'Mayumi Itsuwa',
      age: 72,
      isOnline: false,
      color: 'red',
    },
    {
      name: 'Akira Inaba',
      age: 68,
      isOnline: false,
      color: 'red',
    },
  ];
}
