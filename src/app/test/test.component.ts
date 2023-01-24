import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent
  implements
    OnInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnDestroy
{
  constructor() {
    console.log('constructor');
  }
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
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
