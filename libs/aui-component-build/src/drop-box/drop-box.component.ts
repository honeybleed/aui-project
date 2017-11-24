import {
  Component, ElementRef, HostListener, Input, OnInit, Output, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';
import { ActiveOption } from '../common/active-option';
export enum DropDownBoxTriggerTarget {
  TriggerOnView,
  TriggerOnTail
}
@Component({
  selector: 'aui-drop-box',
  templateUrl: './drop-box.component.html',
  encapsulation: ViewEncapsulation.None
})
export  class DropBoxComponent extends ComponentWithStatus implements OnInit {
  // @Input fields
  @Input()icon: IconObj;
  @Input()label: string;
  @Input()triggerIcon = {
    family: 'common-icon',
    name: 'arrow-down'
  };
  @Input()
  set disable(v: boolean) {
    this.isDisabled = v;
    if (this.isDisabled) {
      this._renderer.removeAttribute(this.showView.nativeElement, 'tabIndex');
    } else {
      this._renderer.setAttribute(this.showView.nativeElement, 'tabIndex', '0');
    }
  }
  @Input() activeOption: ActiveOption;
  get active() {
    if (!this.isDisabled) {
      return this.activeOption;
    }
  }
  @Input() boxHeight: number = -1;
  @Input() autoTrigger: boolean;
  @Input() dropTrigger: DropDownBoxTriggerTarget = DropDownBoxTriggerTarget.TriggerOnView;
  // @ViewChild fields
  @ViewChild('dropDownView') dropDownView: ElementRef;
  @ViewChild('view') showView: ElementRef;

  private _dropDown: boolean;
  public _triggerType = DropDownBoxTriggerTarget;
  constructor(private _renderer: Renderer2) {
    super(['hover', 'focus', 'drop-down']);
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any) {
    if (this.autoTrigger) {
      const inRange = event.path.some((ele: any) => {
        return ele === this.dropDownView.nativeElement;
      });
      if (!inRange && this._dropDown) {
        this.drop_up();
      }
    }
  }
  ngOnInit(): void {
    this.icon = {
      family: 'common-icon',
      name: 'eye'
    };
    if (this.boxHeight < 0) {
      this.boxHeight = this.dropDownView.nativeElement.offsetHeight;
    }
    this.drop_up();
  }
  private hasIcon() {
    return !!this.icon;
  }
  private hasLabel() {
    return !!this.label && this.label.trim().length > 0;
  }
  private onEnter() {
    if (!this.isDisabled) {
      this.setStatus(['hover']);
    }
  }
  private onLeave() {
    if (!this.isDisabled) {
      this.unsetStatus(['hover']);
    }
  }
  private onFocus() {
    if (!this.isDisabled) {
      this.setStatus(['focus']);
    }
  }
  private onBlur() {
    if (!this.isDisabled) {
      this.unsetStatus(['focus']);
    }
  }
  private trigger(tri: DropDownBoxTriggerTarget, event: MouseEvent) {
    event.stopPropagation();
    if (!this.isDisabled) {
      if (tri === this.dropTrigger) {
        if (this._dropDown) {
          this.drop_up();
        } else {
          this.drop_down();
        }
      }
    }
  }
  drop_down() {
    this._dropDown = true;
    this.setStatus(['drop-down']);
    this._renderer.setStyle(this.dropDownView.nativeElement, 'height', this.boxHeight + 'px');
  }
  drop_up() {
    this._dropDown = false;
    this.unsetStatus(['drop-down']);
    this._renderer.setStyle(this.dropDownView.nativeElement, 'height', '0');
  }
}
