import { Component, Input } from '@angular/core';

@Component({
  selector: 'aui-lib-info-title',
  template: '<div class="info-title">{{title}}</div>'
})
export class LibInfoTitleComponent {
  @Input() title: string;
  constructor() {
  }
}
