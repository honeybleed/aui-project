import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-text-input-info',
  templateUrl: './text-input-info.component.html',
  styleUrls: ['./text-input-info.component.scss']
})
export class TextInputInfoComponent {
  desc: string;
  constructor() {
    this.desc = '@aui/text-input 组件用以提供单行文字输入和密码输入的输入框';
  }
  showPosition($e) {
    $e.stopPropagation();
    console.log($e.srcElement.className + ' (' + $e.offsetX + ',' + $e.offsetY + ')');
  }

}
