import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';

@Component({
  selector: 'aui-selector',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './selector.component.html'
})
export class SelectorComponent extends ComponentWithStatus implements OnInit {
  @Input()icon: IconObj;
  @Input()label: string;
  private tailIcon: IconObj;
  constructor() {
    super(['hover', 'focus', 'drop-down']);
  }
  ngOnInit(): void {
    this.tailIcon = {
      family: 'common-icon',
      name: 'eye'
    }
  }
  hasIcon() {
    return !!this.icon;
  }
  hasLabel() {
    return !!this.label && this.label.trim().length > 0;
  }
}
