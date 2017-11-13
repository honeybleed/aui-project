import { Component, Directive, ElementRef, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentWithStatus, IconManageService } from '@aui/common';

var IconObj = (function () {
    function IconObj() {
    }
    return IconObj;
}());
var IconDirective = (function () {
    /**
     * @param {?} _el
     * @param {?} _ims
     */
    function IconDirective(_el, _ims) {
        this._el = _el;
        this._ims = _ims;
        this._renderIcon();
    }
    Object.defineProperty(IconDirective.prototype, "iconObj", {
        /**
         * @param {?} obj
         * @return {?}
         */
        set: function (obj) {
            this._iconObj = obj;
            this._renderIcon();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IconDirective.prototype._renderIcon = function () {
        if (this._iconObj) {
            this._el.nativeElement.innerText = this._ims.getIcon(this._iconObj.family, this._iconObj.name).code;
            this._el.nativeElement.style.fontFamily = this._iconObj.family;
        }
    };
    return IconDirective;
}());
IconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiIcon]'
            },] },
];
/**
 * @nocollapse
 */
IconDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IconManageService, },
]; };
IconDirective.propDecorators = {
    'iconObj': [{ type: Input },],
};

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TextInputComponent = (function (_super) {
    __extends(TextInputComponent, _super);
    function TextInputComponent() {
        var _this = _super.call(this, ['hover', 'focus', 'valid-success', 'valid-error']) || this;
        if (!_this.type) {
            _this.type = 'text';
        }
        if (!_this.placeholder) {
            _this.placeholder = 'placeholder';
        }
        if (!_this.value) {
            _this.value = '';
        }
        return _this;
    }
    Object.defineProperty(TextInputComponent.prototype, "disable", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this.isDisabled = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TextInputComponent.prototype.hasIcon = function () {
        return !!this.icon;
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.hasTail = function () {
        return !!this.tail;
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.hasLabel = function () {
        return !!this.label;
    };
    return TextInputComponent;
}(ComponentWithStatus));
TextInputComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'aui-text-input',
                template: "\n    <div class=\"aui-text-input-outlet\" [ngClass]=\"dumpStatus()\">\n      <div class=\"input-block\">\n        <span auiIcon [iconObj]=\"icon\" *ngIf=\"hasIcon()\" class=\"icon\"></span>\n        <span class=\"label\" *ngIf=\"hasLabel()\">{{label}}</span>\n        <input [type]=\"type\" [value]=\"value\" [disabled]=\"isDisabled\" [placeholder]=\"placeholder\"/>\n        <span class=\"tail\" auiIcon [iconObj]=\"tail\" *ngIf=\"hasTail()\"></span>\n      </div>\n    </div>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
TextInputComponent.ctorParameters = function () { return []; };
TextInputComponent.propDecorators = {
    'value': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'icon': [{ type: Input },],
    'tail': [{ type: Input },],
    'label': [{ type: Input },],
    'type': [{ type: Input },],
    'disable': [{ type: Input },],
};

var AuiComponentModule = (function () {
    function AuiComponentModule() {
    }
    return AuiComponentModule;
}());
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
AuiComponentModule.ctorParameters = function () { return []; };

// export * from './your/main.module';

/**
 * Generated bundle index. Do not edit.
 */

export { AuiComponentModule, IconObj, IconDirective, TextInputComponent };
//# sourceMappingURL=component.es5.js.map
