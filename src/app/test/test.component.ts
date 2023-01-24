import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }
  isDisabled = false;
  dogs = [
    {
      name: 'Alpina',
      breed: 'Golden-Retriever',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
  ];
  ngOnInit(): void {
    console.log('ngOnInit');
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000);
  }
}
