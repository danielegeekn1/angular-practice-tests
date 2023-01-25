import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit {
  @Input() data: any;
  constructor() {}
  ngOnInit(): void {
    console.log(this.data);
  }
}
