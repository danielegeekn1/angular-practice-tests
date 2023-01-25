import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit, OnChanges {
  @Input() data: any; // to receive data from a parent component
  @Output() sendDataEvent = new EventEmitter<string>(); // to output the data to a parent component
  constructor() {}
  name = 'Daniele';
  ngOnInit(): void {
    console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  sendData() {
    this.sendDataEvent.emit(this.name);
  }
}
