import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';
import { ValidateRet } from '../common/validate-ret';
import { ValidateHelper } from '../common/validate-helper';
import { ActiveOption } from '../common/active-option';
export declare class TextInputComponent extends ComponentWithStatus implements OnInit {
    private _cdr;
    isWholeActive: ActiveOption;
    readonly wholeActive: ActiveOption;
    isIconActive: ActiveOption;
    readonly iconActive: ActiveOption;
    isLabelActive: ActiveOption;
    readonly labelActive: ActiveOption;
    isTailActive: ActiveOption;
    readonly tailActive: ActiveOption;
    value: string;
    validateHelper: ValidateHelper;
    placeholder: string;
    icon: IconObj;
    tail: IconObj;
    label: string;
    readonly: boolean;
    type: 'text' | 'password';
    disable: boolean;
    valueChanged: EventEmitter<string>;
    tailClicked: EventEmitter<any>;
    iconClicked: EventEmitter<any>;
    labelClicked: EventEmitter<any>;
    validated: EventEmitter<ValidateRet>;
    inputElement: ElementRef;
    constructor(_cdr: ChangeDetectorRef);
    private hasIcon();
    private hasTail();
    private hasLabel();
    private onInput(event);
    private onChange(event);
    doValidate(onInput?: boolean): void;
    private tailClick();
    private iconClick();
    private labelClick();
    private mouseEnter();
    private mouseLeave();
    private inputFocus();
    private inputBlur();
    focusInput(): void;
    selectAll(): void;
    clearText(): void;
    ngOnInit(): void;
}
