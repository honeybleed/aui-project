(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@aui/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@aui/common'], factory) :
	(factory((global.auiComponent = {}),global.ng.core,global.ng.common,global['@aui/common']));
}(this, (function (exports,core,common,common$1) { 'use strict';

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
    { type: core.Directive, args: [{
                selector: '[auiIcon]'
            },] },
];
/**
 * @nocollapse
 */
IconDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: common$1.IconManageService, },
]; };
IconDirective.propDecorators = {
    'iconObj': [{ type: core.Input },],
};

var ComponentWithStatus = (function () {
    /**
     * @param {?} s
     */
    function ComponentWithStatus(s) {
        this.isDisabled = false;
        this.status = {};
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var i = s_1[_i];
            this.status[i] = false;
        }
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    ComponentWithStatus.prototype.setStatus = function (keys) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var i = keys_1[_i];
            if (this.status.hasOwnProperty(i)) {
                this.status[i] = true;
            }
        }
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    ComponentWithStatus.prototype.unsetStatus = function (keys) {
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var i = keys_2[_i];
            if (this.status.hasOwnProperty(i)) {
                this.status[i] = false;
            }
        }
    };
    /**
     * @return {?}
     */
    ComponentWithStatus.prototype.dumpStatus = function () {
        var /** @type {?} */ ret = [];
        if (this.isDisabled) {
            ret.push('disable');
            return ret.join(' ');
        }
        for (var _i = 0, _a = Object.getOwnPropertyNames(this.status); _i < _a.length; _i++) {
            var s = _a[_i];
            if (this.status.hasOwnProperty(s) && this.status[s]) {
                ret.push(s);
            }
        }
        return ret.join(' ');
    };
    return ComponentWithStatus;
}());

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
    /**
     * @param {?} _cdr
     */
    function TextInputComponent(_cdr) {
        var _this = _super.call(this, ['hover', 'focus', 'mouse-down', 'validate-success', 'validate-error', 'validating']) || this;
        _this._cdr = _cdr;
        _this.valueChanged = new core.EventEmitter();
        _this.tailClicked = new core.EventEmitter();
        _this.iconClicked = new core.EventEmitter();
        _this.labelClicked = new core.EventEmitter();
        _this.validated = new core.EventEmitter();
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
    /**
     * @param {?} event
     * @return {?}
     */
    TextInputComponent.prototype.onInput = function (event) {
        this.value = event.target.value;
        this.valueChanged.emit(this.value);
        this.doValidate(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextInputComponent.prototype.onChange = function (event) {
        this.value = event.target.value;
        this.valueChanged.emit(this.value);
        this.doValidate(false);
    };
    /**
     * @param {?=} onInput
     * @return {?}
     */
    TextInputComponent.prototype.doValidate = function (onInput) {
        var _this = this;
        if (onInput === void 0) { onInput = false; }
        if (!this.isDisabled && this.validateHelper) {
            this.setStatus(['validating']);
            this.unsetStatus(['validate-error']);
            this.unsetStatus(['validate-success']);
            this.validateHelper.doValidate(this.value, onInput).then(function (ret) {
                _this.unsetStatus(['validating']);
                _this.unsetStatus(['validate-error']);
                _this.setStatus(['validate-success']);
                _this.validated.emit(ret);
            }).catch(function (err) {
                _this.unsetStatus(['validating']);
                _this.unsetStatus(['validate-success']);
                _this.setStatus(['validate-error']);
                _this.validated.emit(err);
            });
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.tailClick = function () {
        if (!this.isDisabled) {
            this.tailClicked.emit(null);
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.iconClick = function () {
        if (!this.isDisabled) {
            this.iconClicked.emit(null);
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.labelClick = function () {
        if (!this.isDisabled) {
            this.labelClicked.emit(null);
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.mouseEnter = function () {
        this.setStatus(['hover']);
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.mouseLeave = function () {
        this.unsetStatus(['hover']);
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.inputFocus = function () {
        this.setStatus(['focus']);
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.inputBlur = function () {
        this.unsetStatus(['focus']);
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.focusInput = function () {
        if (!this.isDisabled) {
            this._cdr.detectChanges();
            this.inputElement.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.selectAll = function () {
        if (!this.isDisabled) {
            this._cdr.detectChanges();
            this.inputElement.nativeElement.select(0, this.value.length);
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.clearText = function () {
        if (!this.isDisabled) {
            this._cdr.detectChanges();
            this.value = '';
            this.valueChanged.emit(this.value);
            this.doValidate();
        }
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngOnInit = function () {
        if (!this.type) {
            this.type = 'text';
        }
        if (!this.placeholder) {
            this.placeholder = 'placeholder';
        }
        this.valueChanged.emit(this.value);
        this.doValidate();
    };
    return TextInputComponent;
}(ComponentWithStatus));
TextInputComponent.decorators = [
    { type: core.Component, args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'aui-text-input',
                template: "\n    <div class=\"aui-text-input-outlet\" [ngClass]=\"dumpStatus()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\">\n      <div class=\"input-block\">\n        <span auiIcon\n              (click)=\"iconClick()\"\n              [iconObj]=\"icon\"\n              *ngIf=\"hasIcon()\"\n              class=\"icon\"></span>\n        <span class=\"label\"\n              *ngIf=\"hasLabel()\"\n              (click)=\"labelClick() \">{{label}}</span>\n        <input [type]=\"type\"\n               [value]=\"value\"\n               [disabled]=\"isDisabled\"\n               [placeholder]=\"placeholder\"\n               (change)=\"onChange($event)\"\n               (input)=\"onInput($event)\"\n               (focus)=\"inputFocus()\"\n               (blur)=\"inputBlur()\" #input/>\n        <span class=\"tail\"\n              auiIcon [iconObj]=\"tail\"\n              *ngIf=\"hasTail()\"\n              (click)=\"tailClick()\"></span>\n      </div>\n    </div>\n  ",
                styles: ["\n    .aui-text-input-outlet{display:inline-block}\n  "]
            },] },
];
/**
 * @nocollapse
 */
TextInputComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
TextInputComponent.propDecorators = {
    'value': [{ type: core.Input },],
    'validateHelper': [{ type: core.Input },],
    'placeholder': [{ type: core.Input },],
    'icon': [{ type: core.Input },],
    'tail': [{ type: core.Input },],
    'label': [{ type: core.Input },],
    'type': [{ type: core.Input },],
    'disable': [{ type: core.Input },],
    'valueChanged': [{ type: core.Output },],
    'tailClicked': [{ type: core.Output },],
    'iconClicked': [{ type: core.Output },],
    'labelClicked': [{ type: core.Output },],
    'validated': [{ type: core.Output },],
    'inputElement': [{ type: core.ViewChild, args: ['input',] },],
};

var AuiComponentModule = (function () {
    function AuiComponentModule() {
    }
    return AuiComponentModule;
}());
AuiComponentModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
AuiComponentModule.ctorParameters = function () { return []; };

var ValidateHelper = (function () {
    /**
     * @param {?} validateHandlers
     * @param {?=} sM
     */
    function ValidateHelper(validateHandlers, sM) {
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
    ValidateHelper.prototype.doValidate = function (value, onInput) {
        var /** @type {?} */ ret = {
            ret: true,
            msg: this.successMessage
        };
        var /** @type {?} */ arr = [];
        if (onInput) {
            for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
                var validateHandler = _a[_i];
                if (validateHandler.validateOnInput) {
                    arr.push(validateHandler.doValidate(value));
                }
            }
        }
        else {
            for (var _b = 0, _c = this.handlers; _b < _c.length; _b++) {
                var validateHandler = _c[_b];
                arr.push(validateHandler.doValidate(value));
            }
        }
        return new Promise(function (resolve, reject) {
            Promise.all(arr).then(function (validate) {
                resolve(ret);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return ValidateHelper;
}());

// export * from './your/main.module';

/**
 * Generated bundle index. Do not edit.
 */

exports.AuiComponentModule = AuiComponentModule;
exports.IconObj = IconObj;
exports.IconDirective = IconDirective;
exports.TextInputComponent = TextInputComponent;
exports.ComponentWithStatus = ComponentWithStatus;
exports.ValidateHelper = ValidateHelper;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=component.umd.js.map
