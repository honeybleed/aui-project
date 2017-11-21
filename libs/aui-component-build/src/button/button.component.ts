import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IconObj } from '../icon/icon.directive';
import { ActiveOption } from '../common/active-option';
import { ComponentWithStatus } from '../common/component-with-status';

@Component({
  selector: 'aui-button',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './button.component.html'
})
export class ButtonComponent extends ComponentWithStatus {
  @Input() iconObj: IconObj;
  @Input() isActive: ActiveOption;
  get active() {
    if (!this.isDisabled) {
      return this.isActive;
    }
  }
  @Input() label: string;
  @Input()
  set disable(v: boolean) {
    this.isDisabled = v;
  }
  @Output() mouseClick = new EventEmitter<MouseEvent>();
  constructor() {
    super(['hover', 'focus'])
  }
  private hasIcon() {
    return !!this.iconObj;
  }
  private doClick(event: MouseEvent) {
    if (!this.isDisabled) {
      this.mouseClick.emit(event);
    }
  }
  private onFocus() {
    this.setStatus(['focus']);
  }
  private onBlur() {
    this.unsetStatus(['focus']);
  }
  private onEnter() {
    this.setStatus(['hover']);
  }
  private onLeave() {
    this.unsetStatus(['hover']);
  }
}
