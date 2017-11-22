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
    Object.defineProperty(TextInputComponent.prototype, "wholeActive", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.isDisabled) {
                return this.isWholeActive;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputComponent.prototype, "iconActive", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.isDisabled) {
                return this.isIconActive;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputComponent.prototype, "labelActive", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.isDisabled) {
                return this.isLabelActive;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputComponent.prototype, "tailActive", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.isDisabled) {
                return this.isTailActive;
            }
        },
        enumerable: true,
        configurable: true
    });
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
                template: "\n    <div class=\"aui-text-input-outlet\"\n         [ngClass]=\"dumpStatus()\"\n         (mouseenter)=\"mouseEnter()\"\n         (mouseleave)=\"mouseLeave()\"\n         [auiActive]=\"wholeActive\">\n      <div class=\"input-block\">\n        <span auiIcon\n              (click)=\"iconClick()\"\n              [iconObj]=\"icon\"\n              *ngIf=\"hasIcon()\"\n              class=\"icon\"\n              [auiActive]=\"iconActive\" ></span>\n        <span class=\"label\"\n              *ngIf=\"hasLabel()\"\n              (click)=\"labelClick()\"\n              [auiActive]=\"labelActive\" >{{label}}</span>\n        <input [type]=\"type\"\n               [value]=\"value\"\n               [disabled]=\"isDisabled\"\n               [placeholder]=\"placeholder\"\n               (change)=\"onChange($event)\"\n               (input)=\"onInput($event)\"\n               (focus)=\"inputFocus()\"\n               (blur)=\"inputBlur()\" [readonly]=\"readonly\" #input/>\n        <span class=\"tail\"\n              auiIcon [iconObj]=\"tail\"\n              *ngIf=\"hasTail()\"\n              (click)=\"tailClick()\"\n              [auiActive]=\"tailActive\" ></span>\n      </div>\n    </div>\n  ",
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
    'isWholeActive': [{ type: core.Input },],
    'isIconActive': [{ type: core.Input },],
    'isLabelActive': [{ type: core.Input },],
    'isTailActive': [{ type: core.Input },],
    'value': [{ type: core.Input },],
    'validateHelper': [{ type: core.Input },],
    'placeholder': [{ type: core.Input },],
    'icon': [{ type: core.Input },],
    'tail': [{ type: core.Input },],
    'label': [{ type: core.Input },],
    'readonly': [{ type: core.Input },],
    'type': [{ type: core.Input },],
    'disable': [{ type: core.Input },],
    'valueChanged': [{ type: core.Output },],
    'tailClicked': [{ type: core.Output },],
    'iconClicked': [{ type: core.Output },],
    'labelClicked': [{ type: core.Output },],
    'validated': [{ type: core.Output },],
    'inputElement': [{ type: core.ViewChild, args: ['input',] },],
};

var defaultActiveOption = {
    isActive: true,
    speed: 200,
    color: 'rgba(0,0,0,.3)'
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
    Object.defineProperty(ActiveDirective.prototype, "auiActive", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v) {
                this._aui_active = Object.assign({}, defaultActiveOption);
                if (v.color) {
                    this._aui_active.color = v.color;
                }
                if (v.speed) {
                    this._aui_active.speed = v.speed;
                }
                this._aui_active.isActive = v.isActive;
            }
        },
        enumerable: true,
        configurable: true
    });
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
        this._point_cache.push(point);
        var /** @type {?} */ startD = Math.ceil(Math.max(width, height) / 4);
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
        this._renderer.setStyle(point, 'backgroundColor', this._aui_active.color);
        this._renderer.setStyle(point, 'borderRadius', '100%');
        this._renderer.setStyle(point, 'transition', 'all ' + this._aui_active.speed + 'ms ease-out');
        this._renderer.setStyle(point, 'transform', "scale(1)");
        this._renderer.appendChild(this.activeEl, point);
        setTimeout(function () {
            _this._renderer.setStyle(point, 'transform', "scale(" + zoom + ")");
        }, 0);
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.removePoint = function () {
        var _this = this;
        var /** @type {?} */ point = this._point_cache.pop();
        if (point) {
            setTimeout(function () {
                _this._renderer.setStyle(point, 'transition', 'all .2s ease-out');
                _this._renderer.setStyle(point, 'opacity', "0");
            }, this._aui_active.speed);
            setTimeout(function () {
                _this._renderer.removeChild(_this.activeEl, point);
            }, this._aui_active.speed + 200);
        }
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewInit = function () {
        this.appendRange();
        this._point_cache = [];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ActiveDirective.prototype.onMouseDown = function (event) {
        if (this._aui_active && this._aui_active.isActive && event.button === 0) {
            this.appendPoint();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ActiveDirective.prototype.onMouseUp = function (event) {
        if (this._aui_active && this._aui_active.isActive && event.button === 0) {
            this.removePoint();
        }
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
    'auiActive': [{ type: core.Input },],
    'onMouseDown': [{ type: core.HostListener, args: ['mousedown', ['$event'],] },],
    'onMouseUp': [{ type: core.HostListener, args: ['mouseup', ['$event'],] },],
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ButtonComponent = (function (_super) {
    __extends$1(ButtonComponent, _super);
    function ButtonComponent() {
        var _this = _super.call(this, ['hover', 'focus']) || this;
        _this.mouseClick = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(ButtonComponent.prototype, "active", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.isDisabled) {
                return this.isActive;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "disable", {
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
    ButtonComponent.prototype.hasIcon = function () {
        return !!this.iconObj;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.doClick = function (event) {
        if (!this.isDisabled) {
            this.mouseClick.emit(event);
        }
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onFocus = function () {
        this.setStatus(['focus']);
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onBlur = function () {
        this.unsetStatus(['focus']);
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onEnter = function () {
        this.setStatus(['hover']);
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.onLeave = function () {
        this.unsetStatus(['hover']);
    };
    return ButtonComponent;
}(ComponentWithStatus));
ButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'aui-button',
                encapsulation: core.ViewEncapsulation.None,
                template: "\n    <button [auiActive]=\"active\" (click)=\"doClick($event)\" [disabled]=\"isDisabled\" class=\"aui-button-outline\"\n            [ngClass]=\"dumpStatus()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" (mouseenter)=\"onEnter()\" (mouseleave)=\"onLeave()\">\n      <span class=\"icon\" *ngIf=\"hasIcon()\" auiIcon [iconObj]=\"iconObj\"></span>\n      <span class=\"label\" >{{label}}</span>\n    </button>\n  "
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = function () { return []; };
ButtonComponent.propDecorators = {
    'iconObj': [{ type: core.Input },],
    'isActive': [{ type: core.Input },],
    'label': [{ type: core.Input },],
    'disable': [{ type: core.Input },],
    'mouseClick': [{ type: core.Output },],
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SelectorComponent = (function (_super) {
    __extends$2(SelectorComponent, _super);
    function SelectorComponent() {
        return _super.call(this, ['hover', 'focus', 'drop-down']) || this;
    }
    /**
     * @return {?}
     */
    SelectorComponent.prototype.ngOnInit = function () {
        this.tailIcon = {
            family: 'common-icon',
            name: 'eye'
        };
    };
    /**
     * @return {?}
     */
    SelectorComponent.prototype.hasIcon = function () {
        return !!this.icon;
    };
    /**
     * @return {?}
     */
    SelectorComponent.prototype.hasLabel = function () {
        return !!this.label && this.label.trim().length > 0;
    };
    return SelectorComponent;
}(ComponentWithStatus));
SelectorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'aui-selector',
                encapsulation: core.ViewEncapsulation.None,
                template: "\n\n  "
            },] },
];
/**
 * @nocollapse
 */
SelectorComponent.ctorParameters = function () { return []; };
SelectorComponent.propDecorators = {
    'icon': [{ type: core.Input },],
    'label': [{ type: core.Input },],
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OptionComponent = (function (_super) {
    __extends$3(OptionComponent, _super);
    function OptionComponent() {
        return _super.call(this, ['hover', 'focus']) || this;
    }
    return OptionComponent;
}(ComponentWithStatus));
OptionComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'aui-option',
                encapsulation: core.ViewEncapsulation.None,
                template: "\n    <div class=\"aui-option-outline\">\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/**
 * @nocollapse
 */
OptionComponent.ctorParameters = function () { return []; };

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DropBoxComponent = (function (_super) {
    __extends$4(DropBoxComponent, _super);
    function DropBoxComponent() {
        return _super.call(this, ['hover', 'focus', 'drop-down']) || this;
    }
    Object.defineProperty(DropBoxComponent.prototype, "triggerIcon", {
        /**
         * @return {?}
         */
        get: function () {
            if (!!this._triggerIcon) {
                return this._triggerIcon;
            }
            else {
                return {
                    family: 'common-icon',
                    name: 'arrow-down'
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DropBoxComponent.prototype.ngOnInit = function () {
        this.icon = {
            family: 'common-icon',
            name: 'eye'
        };
    };
    /**
     * @return {?}
     */
    DropBoxComponent.prototype.hasIcon = function () {
        return !!this.icon;
    };
    /**
     * @return {?}
     */
    DropBoxComponent.prototype.hasLabel = function () {
        return !!this.label && this.label.trim().length > 0;
    };
    return DropBoxComponent;
}(ComponentWithStatus));
DropBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'aui-drop-box',
                template: "\n    <div class=\"aui-drop-box-outline\" style=\"display: inline-block; position: relative;\">\n      <div class=\"view-active-range\" [auiActive] = \"{ isActive: true }\">\n        <div class=\"drop-value-view\" style=\"display: table; table-layout: fixed\">\n          <span class=\"icon\" auiIcon [iconObj]=\"icon\" *ngIf=\"hasIcon()\" style=\"display: table-cell\"></span>\n          <span class=\"label\" *ngIf=\"hasLabel()\" style=\"display: table-cell\">{{label}}</span>\n          <span class=\"trigger\" auiIcon [iconObj]=\"triggerIcon\" style=\"display: table-cell\"></span>\n        </div>\n      </div>\n\n      <div class=\"drop-down-view\" style=\"position: absolute\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
DropBoxComponent.ctorParameters = function () { return []; };
DropBoxComponent.propDecorators = {
    'icon': [{ type: core.Input },],
    'label': [{ type: core.Input },],
    '_triggerIcon': [{ type: core.Input },],
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
                    TextInputComponent,
                    ButtonComponent,
                    DropBoxComponent,
                    SelectorComponent,
                    OptionComponent
                ],
                exports: [
                    ActiveDirective,
                    IconDirective,
                    TextInputComponent,
                    ButtonComponent,
                    DropBoxComponent,
                    SelectorComponent,
                    OptionComponent
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
exports.ButtonComponent = ButtonComponent;
exports.SelectorComponent = SelectorComponent;
exports.OptionComponent = OptionComponent;
exports.DropBoxComponent = DropBoxComponent;
exports.ComponentWithStatus = ComponentWithStatus;
exports.ValidateHelper = ValidateHelper;
exports.defaultActiveOption = defaultActiveOption;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=component.umd.js.map
