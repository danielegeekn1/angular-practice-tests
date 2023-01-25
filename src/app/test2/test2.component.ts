import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit, OnChanges {
  @Input() data: any;
  constructor() {}
  ngOnInit(): void {
    console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
