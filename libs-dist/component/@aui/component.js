import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, HostListener, Input, NgModule, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
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
            const /** @type {?} */ foundIcon = this._ims.getIcon(this._iconObj.family, this._iconObj.name);
            if (foundIcon) {
                this._el.nativeElement.innerText = this._ims.getIcon(this._iconObj.family, this._iconObj.name).code;
                this._el.nativeElement.style.fontFamily = this._iconObj.family;
            }
            else {
                this._el.nativeElement.innerText = this._iconObj.name;
                console.warn(`icon object described as ` +
                    `[family: ${this._iconObj.family}, name: ${this._iconObj.name}] ` +
                    `was not found! we show the icon name [${this._iconObj.name}] for replacement!`);
            }
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
    <div class="aui-text-input-outlet"
         [ngClass]="dumpStatus()"
         (mouseenter)="mouseEnter()"
         (mouseleave)="mouseLeave()"
         [auiActive]="isWholeActive">
      <div class="input-block">
        <span auiIcon
              (click)="iconClick()"
              [iconObj]="icon"
              *ngIf="hasIcon()"
              class="icon"
              [auiActive]="isIconActive" ></span>
        <span class="label"
              *ngIf="hasLabel()"
              (click)="labelClick()"
              [auiActive]="isLabelActive" >{{label}}</span>
        <input [type]="type"
               [value]="value"
               [disabled]="isDisabled"
               [placeholder]="placeholder"
               (change)="onChange($event)"
               (input)="onInput($event)"
               (focus)="inputFocus()"
               (blur)="inputBlur()" [readonly]="readonly" #input/>
        <span class="tail"
              auiIcon [iconObj]="tail"
              *ngIf="hasTail()"
              (click)="tailClick()"
              [auiActive]="isTailActive" ></span>
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
TextInputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
TextInputComponent.propDecorators = {
    'isWholeActive': [{ type: Input },],
    'isIconActive': [{ type: Input },],
    'isLabelActive': [{ type: Input },],
    'isTailActive': [{ type: Input },],
    'value': [{ type: Input },],
    'validateHelper': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'icon': [{ type: Input },],
    'tail': [{ type: Input },],
    'label': [{ type: Input },],
    'readonly': [{ type: Input },],
    'type': [{ type: Input },],
    'disable': [{ type: Input },],
    'valueChanged': [{ type: Output },],
    'tailClicked': [{ type: Output },],
    'iconClicked': [{ type: Output },],
    'labelClicked': [{ type: Output },],
    'validated': [{ type: Output },],
    'inputElement': [{ type: ViewChild, args: ['input',] },],
};

const defaultActiveOption = {
    isActive: true,
    speed: 200,
    color: 'rgba(0,0,0,.3)'
};

class ActiveDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set auiActive(v) {
        if (v) {
            this._aui_active = defaultActiveOption;
            if (v.color) {
                this._aui_active.color = v.color;
            }
            if (v.speed) {
                this._aui_active.speed = v.speed;
            }
            this._aui_active.isActive = v.isActive;
        }
    }
    /**
     * @return {?}
     */
    appendRange() {
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
    }
    /**
     * @return {?}
     */
    appendPoint() {
        const /** @type {?} */ width = this._el.nativeElement.offsetWidth;
        const /** @type {?} */ height = this._el.nativeElement.offsetHeight;
        const /** @type {?} */ point = this._renderer.createElement('span');
        const /** @type {?} */ startD = Math.ceil(Math.max(width, height) / 4);
        const /** @type {?} */ distD = Math.ceil(Math.sqrt(width * width + height * height));
        const /** @type {?} */ zoom = Math.ceil(distD / startD);
        const /** @type {?} */ startPosition = {
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
        this._renderer.setStyle(point, 'transform', `scale(1)`);
        this._renderer.appendChild(this.activeEl, point);
        setTimeout(() => {
            this._renderer.setStyle(point, 'transform', `scale(${zoom})`);
        }, 0);
        setTimeout(() => {
            this._renderer.setStyle(point, 'transition', 'all .2s ease-out');
            this._renderer.setStyle(point, 'opacity', `0`);
        }, this._aui_active.speed);
        setTimeout(() => {
            this._renderer.removeChild(this.activeEl, point);
        }, this._aui_active.speed + 200);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.appendRange();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (this._aui_active && this._aui_active.isActive && event.button === 0) {
            this.appendPoint();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        
    }
}
ActiveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiActive]'
            },] },
];
/**
 * @nocollapse
 */
ActiveDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ActiveDirective.propDecorators = {
    'auiActive': [{ type: Input },],
    'onMouseDown': [{ type: HostListener, args: ['mousedown', ['$event'],] },],
    'onMouseUp': [{ type: HostListener, args: ['mouseup', ['$event'],] },],
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

export { AuiComponentModule, IconObj, IconDirective, ActiveDirective, TextInputComponent, ComponentWithStatus, ValidateHelper, defaultActiveOption };
//# sourceMappingURL=component.js.map
