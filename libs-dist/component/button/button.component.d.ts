import { EventEmitter } from '@angular/core';
import { IconObj } from '../icon/icon.directive';
import { ActiveOption } from '../common/active-option';
import { ComponentWithStatus } from '../common/component-with-status';
export declare class ButtonComponent extends ComponentWithStatus {
    iconObj: IconObj;
    isActive: ActiveOption;
    readonly active: ActiveOption;
    label: string;
    disable: boolean;
    mouseClick: EventEmitter<MouseEvent>;
    constructor();
    private hasIcon();
    private doClick(event);
    private onFocus();
    private onBlur();
    private onEnter();
    private onLeave();
}
