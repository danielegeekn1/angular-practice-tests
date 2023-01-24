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
  title = 'best practice tutorial ever';
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
  img = '';
  img1 =
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000';
  img2 =
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg';
  isVisible = true;
  onClick() {
    console.log('I clicked');
  }
  onInput(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
    console.log((<HTMLInputElement>e.target).value);
  }
  onClick2(e: Event) {
    this.title = ' I clicked on the button';
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    let counter = 0;
    setInterval(() => {
      if (counter % 2 == 0) {
        this.img = this.img1;
      } else {
        this.img = this.img2;
      }
      counter++;
    }, 2000);
  }
}
