import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('greetingsInput') inputValue!: ElementRef<HTMLInputElement>;
  title = 'Angular-from-scratch';
  color = 'purple';
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
  onClickAgain(): void {
    this.singers = [
      {
        name: 'David Gilmour',
        age: 76,
        isOnline: true,
        color: 'green',
      },
      {
        name: 'Adriano Celentano',
        age: 85,
        isOnline: true,
        color: 'green',
      },
      {
        name: 'Miyavi',
        age: 41,
        isOnline: false,
        color: 'red',
      },
      {
        name: 'Paul MacCartney',
        age: 80,
        isOnline: false,
        color: 'red',
      },
    ];
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.inputValue);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.inputValue);
  }
  onReceivedData(value: string) {
    console.log(value);
  }
  onTest3DataReceived(value: { title: string; author: string }[]) {
    console.log(value);
  }
  onClickPlus() {
    console.log(this.inputValue.nativeElement.value);
  }
  changeHiglighterColor(color: string) {
    this.color = color;
  }
}
