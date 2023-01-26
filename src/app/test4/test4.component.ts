import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css'],
})
export class Test4Component implements OnInit {
  constructor(private testService: TestService) {}
  ngOnInit(): void {
    console.log('test4 component', this.testService.guests);
  }
}
