import { OnInit } from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';
export declare class SelectorComponent extends ComponentWithStatus implements OnInit {
    icon: IconObj;
    label: string;
    private tailIcon;
    constructor();
    ngOnInit(): void;
    hasIcon(): boolean;
    hasLabel(): boolean;
}
