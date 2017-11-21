import { Component, ViewEncapsulation } from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';

@Component({
  selector: 'aui-option',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './option.component.html'
})
export class OptionComponent extends ComponentWithStatus {
  constructor() {
    super(['hover', 'focus'])
  }
}

