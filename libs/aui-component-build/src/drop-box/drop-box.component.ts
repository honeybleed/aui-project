import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';

@Component({
  selector: 'aui-drop-box',
  templateUrl: './drop-box.component.html',
  encapsulation: ViewEncapsulation.None
})
export  class DropBoxComponent extends ComponentWithStatus implements OnInit {
  @Input()icon: IconObj;
  @Input()label: string;
  @Input()_triggerIcon: IconObj;
  get triggerIcon() {
    if (!!this._triggerIcon) {
      return this._triggerIcon;
    } else {
      return {
        family: 'common-icon',
        name: 'arrow-down'
      };
    }
  }
  constructor() {
    super(['hover', 'focus', 'drop-down']);
  }
  ngOnInit(): void {
    this.icon = {
      family: 'common-icon',
      name: 'eye'
    };

  }
  hasIcon() {
    return !!this.icon;
  }
  hasLabel() {
    return !!this.label && this.label.trim().length > 0;
  }
}
