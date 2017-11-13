import { Component, Directive, ElementRef, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentWithStatus, IconManageService } from '@aui/common';

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

class TextInputComponent extends ComponentWithStatus {
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
}
TextInputComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'aui-text-input',
                template: `
    <div class="aui-text-input-outlet" [ngClass]="dumpStatus()">
      <div class="input-block">
        <span auiIcon [iconObj]="icon" *ngIf="hasIcon()" class="icon"></span>
        <span class="label" *ngIf="hasLabel()">{{label}}</span>
        <input [type]="type" [value]="value" [disabled]="isDisabled" [placeholder]="placeholder"/>
        <span class="tail" auiIcon [iconObj]="tail" *ngIf="hasTail()"></span>
      </div>
    </div>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
TextInputComponent.ctorParameters = () => [];
TextInputComponent.propDecorators = {
    'value': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'icon': [{ type: Input },],
    'tail': [{ type: Input },],
    'label': [{ type: Input },],
    'type': [{ type: Input },],
    'disable': [{ type: Input },],
};

class AuiComponentModule {
    constructor() { }
}
AuiComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
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

// export * from './your/main.module';

/**
 * Generated bundle index. Do not edit.
 */

export { AuiComponentModule, IconObj, IconDirective, TextInputComponent };
//# sourceMappingURL=component.js.map
