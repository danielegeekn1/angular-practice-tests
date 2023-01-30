import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    interval(1000).subscribe((number) => {
      console.log(number);
    });
    //  new Observable((observer) => {
    //     let count = 0;
    //     setInterval(() => {
    //        observer.next(count);
    //       count++;
    //    }, 1000);
    //   }).subscribe((number) => {
    //      console.log(number);
    //    });
    //  }
  }
}
