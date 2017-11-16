import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, Input, NgModule, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconManageService } from '@aui/common';

class IconObj {
}
class IconDirective {
    /**
     * @param {?} _el
     * @param {?} _ims
     */
    constructor(_el, _ims) {
        this._el = _el;
        this._ims = _ims;
        this._renderIcon();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    set iconObj(obj) {
        this._iconObj = obj;
        this._renderIcon();
    }
    /**
     * @return {?}
     */
    _renderIcon() {
        if (this._iconObj) {
            this._el.nativeElement.innerText = this._ims.getIcon(this._iconObj.family, this._iconObj.name).code;
            this._el.nativeElement.style.fontFamily = this._iconObj.family;
        }
    }
}
IconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiIcon]'
            },] },
];
/**
 * @nocollapse
 */
IconDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: IconManageService, },
];
IconDirective.propDecorators = {
    'iconObj': [{ type: Input },],
};

class ComponentWithStatus {
    /**
     * @param {?} s
     */
    constructor(s) {
        this.isDisabled = false;
        this.status = {};
        for (const i of s) {
            this.status[i] = false;
        }
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    setStatus(keys) {
        for (const /** @type {?} */ i of keys) {
            if (this.status.hasOwnProperty(i)) {
                this.status[i] = true;
            }
        }
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    unsetStatus(keys) {
        for (const /** @type {?} */ i of keys) {
            if (this.status.hasOwnProperty(i)) {
                this.status[i] = false;
            }
        }
    }
    /**
     * @return {?}
     */
    dumpStatus() {
        const /** @type {?} */ ret = [];
        if (this.isDisabled) {
            ret.push('disable');
            return ret.join(' ');
        }
        for (const /** @type {?} */ s of Object.getOwnPropertyNames(this.status)) {
            if (this.status.hasOwnProperty(s) && this.status[s]) {
                ret.push(s);
            }
        }
        return ret.join(' ');
    }
}

class TextInputComponent extends ComponentWithStatus {
    /**
     * @param {?} _cdr
     */
    constructor(_cdr) {
        super(['hover', 'focus', 'mouse-down', 'validate-success', 'validate-error', 'validating']);
        this._cdr = _cdr;
        this.valueChanged = new EventEmitter();
        this.tailClicked = new EventEmitter();
        this.iconClicked = new EventEmitter();
        this.labelClicked = new EventEmitter();
        this.validated = new EventEmitter();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set disable(v) {
        this.isDisabled = v;
    }
    /**
     * @return {?}
     */
    hasIcon() {
        return !!this.icon;
    }
    /**
     * @return {?}
     */
    hasTail() {
        return !!this.tail;
    }
    /**
     * @return {?}
     */
    hasLabel() {
        return !!this.label;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        this.value = event.target.value;
        this.valueChanged.emit(this.value);
        this.doValidate(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.value = event.target.value;
        this.valueChanged.emit(this.value);
        this.doValidate(false);
    }
    /**
     * @param {?=} onInput
     * @return {?}
     */
    doValidate(onInput = false) {
        if (!this.isDisabled && this.validateHelper) {
            this.setStatus(['validating']);
            this.unsetStatus(['validate-error']);
            this.unsetStatus(['validate-success']);
            this.validateHelper.doValidate(this.value, onInput).then((ret) => {
                this.unsetStatus(['validating']);
                this.unsetStatus(['validate-error']);
                this.setStatus(['validate-success']);
                this.validated.emit(ret);
            }).catch((err) => {
                this.unsetStatus(['validating']);
                this.unsetStatus(['validate-success']);
                this.setStatus(['validate-error']);
                this.validated.emit(err);
            });
        }
    }
    /**
     * @return {?}
     */
    tailClick() {
        if (!this.isDisabled) {
            this.tailClicked.emit(null);
        }
    }
    /**
     * @return {?}
     */
    iconClick() {
        if (!this.isDisabled) {
            this.iconClicked.emit(null);
        }
    }
    /**
     * @return {?}
     */
    labelClick() {
        if (!this.isDisabled) {
            this.labelClicked.emit(null);
        }
    }
    /**
     * @return {?}
     */
    mouseEnter() {
        this.setStatus(['hover']);
    }
    /**
     * @return {?}
     */
    mouseLeave() {
        this.unsetStatus(['hover']);
    }
    /**
     * @return {?}
     */
    inputFocus() {
        this.setStatus(['focus']);
    }
    /**
     * @return {?}
     */
    inputBlur() {
        this.unsetStatus(['focus']);
    }
    /**
     * @return {?}
     */
    focusInput() {
        if (!this.isDisabled) {
            this._cdr.detectChanges();
            this.inputElement.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    selectAll() {
        if (!this.isDisabled) {
            this._cdr.detectChanges();
            this.inputElement.nativeElement.select(0, this.value.length);
        }
    }
    /**
     * @return {?}
     */
    clearText() {
        if (!this.isDisabled) {
            this._cdr.detectChanges();
            this.value = '';
            this.valueChanged.emit(this.value);
            this.doValidate();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
TextInputComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'aui-text-input',
                template: `
    <div class="aui-text-input-outlet" [ngClass]="dumpStatus()" (mouseenter)="mouseEnter()" (mouseleave)="mouseLeave()">
      <div class="input-block">
        <span auiIcon
              (click)="iconClick()"
              [iconObj]="icon"
              *ngIf="hasIcon()"
              class="icon"></span>
        <span class="label"
              *ngIf="hasLabel()"
              (click)="labelClick() ">{{label}}</span>
        <input [type]="type"
               [value]="value"
               [disabled]="isDisabled"
               [placeholder]="placeholder"
               (change)="onChange($event)"
               (input)="onInput($event)"
               (focus)="inputFocus()"
               (blur)="inputBlur()" #input/>
        <span class="tail"
              auiIcon [iconObj]="tail"
              *ngIf="hasTail()"
              (click)="tailClick()"></span>
      </div>
    </div>
  `,
                styles: [`
    .aui-text-input-outlet{display:inline-block}
  `]
            },] },
];
/**
 * @nocollapse
 */
TextInputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
TextInputComponent.propDecorators = {
    'value': [{ type: Input },],
    'validateHelper': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'icon': [{ type: Input },],
    'tail': [{ type: Input },],
    'label': [{ type: Input },],
    'type': [{ type: Input },],
    'disable': [{ type: Input },],
    'valueChanged': [{ type: Output },],
    'tailClicked': [{ type: Output },],
    'iconClicked': [{ type: Output },],
    'labelClicked': [{ type: Output },],
    'validated': [{ type: Output },],
    'inputElement': [{ type: ViewChild, args: ['input',] },],
};

class AuiComponentModule {
    constructor() { }
}
AuiComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    IconDirective,
                    TextInputComponent
                ],
                exports: [
                    IconDirective,
                    TextInputComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
AuiComponentModule.ctorParameters = () => [];

class ValidateHelper {
    /**
     * @param {?} validateHandlers
     * @param {?=} sM
     */
    constructor(validateHandlers, sM) {
        this.handlers = [];
        this.successMessage = '';
        this.handlers = this.handlers.concat(validateHandlers);
        if (sM) {
            this.successMessage = sM;
        }
    }
    /**
     * @param {?} value
     * @param {?} onInput
     * @return {?}
     */
    doValidate(value, onInput) {
        const /** @type {?} */ ret = {
            ret: true,
            msg: this.successMessage
        };
        const /** @type {?} */ arr = [];
        if (onInput) {
            for (const /** @type {?} */ validateHandler of this.handlers) {
                if (validateHandler.validateOnInput) {
                    arr.push(validateHandler.doValidate(value));
                }
            }
        }
        else {
            for (const /** @type {?} */ validateHandler of this.handlers) {
                arr.push(validateHandler.doValidate(value));
            }
        }
        return new Promise((resolve, reject) => {
            Promise.all(arr).then((validate) => {
                resolve(ret);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

// export * from './your/main.module';

/**
 * Generated bundle index. Do not edit.
 */

export { AuiComponentModule, IconObj, IconDirective, TextInputComponent, ComponentWithStatus, ValidateHelper };
//# sourceMappingURL=component.js.map
