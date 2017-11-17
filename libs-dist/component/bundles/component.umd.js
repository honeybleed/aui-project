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
            var /** @type {?} */ foundIcon = this._ims.getIcon(this._iconObj.family, this._iconObj.name);
            if (foundIcon) {
                this._el.nativeElement.innerText = this._ims.getIcon(this._iconObj.family, this._iconObj.name).code;
                this._el.nativeElement.style.fontFamily = this._iconObj.family;
            }
            else {
                this._el.nativeElement.innerText = this._iconObj.name;
                console.warn("icon object described as " +
                    ("[family: " + this._iconObj.family + ", name: " + this._iconObj.name + "] ") +
                    ("was not found! we show the icon name [" + this._iconObj.name + "] for replacement!"));
            }
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
                template: "\n    <div class=\"aui-text-input-outlet\" [ngClass]=\"dumpStatus()\" (mouseenter)=\"mouseEnter()\" (mouseleave)=\"mouseLeave()\">\n      <div class=\"input-block\">\n        <span auiIcon\n              (click)=\"iconClick()\"\n              [iconObj]=\"icon\"\n              *ngIf=\"hasIcon()\"\n              class=\"icon\"\n              auiActive ></span>\n        <span class=\"label\"\n              *ngIf=\"hasLabel()\"\n              (click)=\"labelClick()\" auiActive >{{label}}</span>\n        <input [type]=\"type\"\n               [value]=\"value\"\n               [disabled]=\"isDisabled\"\n               [placeholder]=\"placeholder\"\n               (change)=\"onChange($event)\"\n               (input)=\"onInput($event)\"\n               (focus)=\"inputFocus()\"\n               (blur)=\"inputBlur()\" #input/>\n        <span class=\"tail\"\n              auiIcon [iconObj]=\"tail\"\n              *ngIf=\"hasTail()\"\n              (click)=\"tailClick()\" auiActive ></span>\n      </div>\n    </div>\n  ",
                styles: ["\n\n  "]
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

var ActiveDirective = (function () {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    function ActiveDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ActiveDirective.prototype.appendRange = function () {
        this.activeEl = this._renderer.createElement('span');
        this._renderer.addClass(this.activeEl, 'active-range');
        if (this._el.nativeElement.style.position !== 'absolute' && this._el.nativeElement.style.position !== 'relative') {
            this._renderer.setStyle(this._el.nativeElement, 'position', 'relative');
        }
        if (this._el.nativeElement.style.zIndex === '') {
            this._renderer.setStyle(this._el.nativeElement, 'zIndex', '0');
        }
        this._renderer.setStyle(this.activeEl, 'position', 'absolute');
        this._renderer.setStyle(this.activeEl, 'overflow', 'hidden');
        this._renderer.setStyle(this.activeEl, 'z-index', '-1');
        this._renderer.setStyle(this.activeEl, 'left', '0');
        this._renderer.setStyle(this.activeEl, 'right', '0');
        this._renderer.setStyle(this.activeEl, 'top', '0');
        this._renderer.setStyle(this.activeEl, 'bottom', '0');
        // this._renderer.setStyle(this.activeEl, 'backgroundColor', 'red');
        this._renderer.insertBefore(this._el.nativeElement, this.activeEl, this._el.nativeElement.childNodes[0]);
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.appendPoint = function () {
        var _this = this;
        var /** @type {?} */ width = this._el.nativeElement.offsetWidth;
        var /** @type {?} */ height = this._el.nativeElement.offsetHeight;
        var /** @type {?} */ point = this._renderer.createElement('span');
        var /** @type {?} */ startD = Math.ceil(Math.max(width, height) / 2);
        var /** @type {?} */ distD = Math.ceil(Math.sqrt(width * width + height * height));
        var /** @type {?} */ zoom = Math.ceil(distD / startD);
        var /** @type {?} */ startPosition = {
            left: Math.ceil((width - startD) / 2),
            top: Math.ceil((height - startD) / 2)
        };
        this._renderer.setStyle(point, 'position', 'absolute');
        this._renderer.setStyle(point, 'display', 'block');
        this._renderer.setStyle(point, 'width', startD + 'px');
        this._renderer.setStyle(point, 'height', startD + 'px');
        this._renderer.setStyle(point, 'left', startPosition.left + 'px');
        this._renderer.setStyle(point, 'top', startPosition.top + 'px');
        this._renderer.setStyle(point, 'backgroundColor', 'rgba(0,0,0,.2)');
        this._renderer.setStyle(point, 'borderRadius', '100%');
        this._renderer.setStyle(point, 'transition', 'all .4s ease-out');
        this._renderer.setStyle(point, 'transform', "scale(1)");
        this._renderer.appendChild(this.activeEl, point);
        setTimeout(function () {
            _this._renderer.setStyle(point, 'transform', "scale(" + zoom + ")");
        }, 0);
        setTimeout(function () {
            _this._renderer.setStyle(point, 'transition', 'all .2s ease-out');
            _this._renderer.setStyle(point, 'opacity', "0");
        }, 400);
        setTimeout(function () {
            _this._renderer.removeChild(_this.activeEl, point);
        }, 600);
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewInit = function () {
        this.appendRange();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ActiveDirective.prototype.onMouseDown = function (event) {
        console.dir(event);
        if (event.button === 0) {
            this.appendPoint();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ActiveDirective.prototype.onMouseUp = function (event) {
        
    };
    return ActiveDirective;
}());
ActiveDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[auiActive]'
            },] },
];
/**
 * @nocollapse
 */
ActiveDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
ActiveDirective.propDecorators = {
    'onMouseDown': [{ type: core.HostListener, args: ['mousedown', ['$event'],] },],
    'onMouseUp': [{ type: core.HostListener, args: ['mouseup', ['$event'],] },],
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
                    ActiveDirective,
                    IconDirective,
                    TextInputComponent
                ],
                exports: [
                    ActiveDirective,
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
exports.ActiveDirective = ActiveDirective;
exports.TextInputComponent = TextInputComponent;
exports.ComponentWithStatus = ComponentWithStatus;
exports.ValidateHelper = ValidateHelper;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=component.umd.js.map
