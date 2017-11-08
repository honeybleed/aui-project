import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aui-nest',
  templateUrl: './nest-test.component.html'
})
export class NestTestComponent implements OnInit{
  @Input()f: string;
  constructor() {
  }
  ngOnInit(): void {
    console.dir(this.f);
  }
}
