import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';
import { ValidateRet } from '../common/validate-ret';
import { ValidateHelper } from '../common/validate-helper';
import { ActiveOption } from '../common/active-option';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: [
    './text-input.component.scss'
  ]
})
export class TextInputComponent extends ComponentWithStatus implements OnInit {
  @Input() isWholeActive: ActiveOption;
  @Input() isIconActive: ActiveOption;
  @Input() isLabelActive: ActiveOption;
  @Input() isTailActive: ActiveOption;
  @Input() value: string;
  @Input() validateHelper: ValidateHelper;
  @Input() placeholder: string;
  @Input() icon: IconObj;
  @Input() tail: IconObj;
  @Input() label: string;
  @Input() readonly: boolean;
  @Input() type: 'text' | 'password';
  @Input()
  set disable(v: boolean) {
    this.isDisabled = v;
  }
  @Output() valueChanged = new EventEmitter<string>();
  @Output() tailClicked = new EventEmitter<any>();
  @Output() iconClicked = new EventEmitter<any>();
  @Output() labelClicked = new EventEmitter<any>();
  @Output() validated = new EventEmitter<ValidateRet>();
  @ViewChild('input') inputElement: ElementRef;
  constructor(private _cdr: ChangeDetectorRef) {
     super(['hover', 'focus', 'mouse-down', 'validate-success', 'validate-error', 'validating']);
  }
  private hasIcon(): boolean {
    return !!this.icon;
  }
  private hasTail(): boolean {
    return !!this.tail;
  }
  private hasLabel(): boolean {
    return !!this.label;
  }
  private onInput(event: any) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
    this.doValidate( true );
  }
  private onChange(event: any) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
    this.doValidate( false );
  }
  doValidate(onInput: boolean = false) {
    if (!this.isDisabled && this.validateHelper) {
      this.setStatus(['validating']);
      this.unsetStatus(['validate-error']);
      this.unsetStatus(['validate-success']);
      this.validateHelper.doValidate(this.value, onInput).then((ret) => {
        this.unsetStatus(['validating']);
        this.unsetStatus(['validate-error']);
        this.setStatus(['validate-success']);
        this.validated.emit(ret);
      }).catch((err: ValidateRet) => {
        this.unsetStatus(['validating']);
        this.unsetStatus(['validate-success']);
        this.setStatus(['validate-error']);
        this.validated.emit(err);
      });
    }
  }
  private tailClick() {
    if (!this.isDisabled) {
      this.tailClicked.emit(null);
    }
  }
  private iconClick() {
    if (!this.isDisabled) {
      this.iconClicked.emit(null);
    }
  }
  private labelClick() {
    if (!this.isDisabled) {
      this.labelClicked.emit(null);
    }
  }
  private mouseEnter() {
    this.setStatus(['hover']);
  }
  private mouseLeave() {
    this.unsetStatus(['hover']);
  }
  private inputFocus() {
    this.setStatus(['focus']);
  }
  private inputBlur() {
    this.unsetStatus(['focus']);
  }
  focusInput() {
    if (!this.isDisabled) {
      this._cdr.detectChanges();
      this.inputElement.nativeElement.focus();
    }
  }
  selectAll() {
    if (!this.isDisabled) {
      this._cdr.detectChanges();
      this.inputElement.nativeElement.select(0, this.value.length);
    }
  }
  clearText() {
    if (!this.isDisabled) {
      this._cdr.detectChanges();
      this.value = '';
      this.valueChanged.emit(this.value);
      this.doValidate();
    }
  }
  ngOnInit(): void {
    if (!this.type) {
      this.type = 'text';
    }
    if (!this.placeholder) {
      this.placeholder = 'placeholder';
    }
    this.valueChanged.emit(this.value);
    this.doValidate();
  }
 }
