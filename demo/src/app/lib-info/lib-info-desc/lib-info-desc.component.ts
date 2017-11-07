import { Component, Input } from '@angular/core';

@Component({
  selector: 'aui-lib-info-desc',
  template: '<div class="info-desc">{{desc}}</div>'
})
export class LibInfoDescComponent {
  @Input() desc: string;
  constructor() {}
}
