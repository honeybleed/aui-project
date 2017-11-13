import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ComponentWithStatus } from '@aui/common';
import { IconObj } from '../icon/icon.directive';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: [
    './text-input.component.scss'
  ]
})
export class TextInputComponent extends ComponentWithStatus {
  @Input() value: string;
  @Input() placeholder: string;
  @Input() icon: IconObj;
  @Input() tail: IconObj;
  @Input() label: string;
  @Input() type: 'text' | 'password';
  @Input()
  set disable(v: boolean) {
    this.isDisabled = v;
  }
  constructor() {
     super(['hover', 'focus', 'valid-success', 'valid-error']);
    if (!this.type) {
      this.type = 'text';
    }
    if (!this.placeholder) {
      this.placeholder = 'placeholder';
    }
    if (!this.value) {
      this.value = '';
    }
  }
  hasIcon(): boolean {
    return !!this.icon;
  }
  hasTail(): boolean {
    return !!this.tail;
  }
  hasLabel(): boolean {
    return !!this.label;
  }
 }
