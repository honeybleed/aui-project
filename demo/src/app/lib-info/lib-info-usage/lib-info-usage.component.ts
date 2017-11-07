import { Component, Input } from '@angular/core';

@Component({
  selector: 'aui-lib-info-usage',
  template: '<div class="lib-usage">' +
  '<div class="title">使用方法</div>' +
  '<div class="text-block">' +
  '<markdown [path]="path()"></markdown>' +
  '</div></div>',
  styleUrls: ['./lib-info-usage.component.scss']
})
export class LibInfoUsageComponent {
  @Input() markdown: string;
  constructor() {
  }
  path(): string {
    return '/assets/usage/' + this.markdown + '.md';
  }
}
