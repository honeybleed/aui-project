import { OnInit } from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';
export declare class DropBoxComponent extends ComponentWithStatus implements OnInit {
    icon: IconObj;
    label: string;
    _triggerIcon: IconObj;
    readonly triggerIcon: IconObj;
    constructor();
    ngOnInit(): void;
    hasIcon(): boolean;
    hasLabel(): boolean;
}
