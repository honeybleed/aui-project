import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ComponentWithStatus } from '../common/component-with-status';
import { IconObj } from '../icon/icon.directive';
import { ActiveOption } from '../common/active-option';
export declare enum DropDownBoxTriggerTarget {
    TriggerOnView = 0,
    TriggerOnTail = 1,
}
export declare class DropBoxComponent extends ComponentWithStatus implements OnInit {
    private _renderer;
    icon: IconObj;
    label: string;
    triggerIcon: {
        family: string;
        name: string;
    };
    disable: boolean;
    activeOption: ActiveOption;
    readonly active: ActiveOption;
    boxHeight: number;
    autoTrigger: boolean;
    dropTrigger: DropDownBoxTriggerTarget;
    dropDownView: ElementRef;
    showView: ElementRef;
    triggerEmitted: EventEmitter<{
        isDown: boolean;
        view: ElementRef;
    }>;
    private _dropDown;
    _triggerType: typeof DropDownBoxTriggerTarget;
    constructor(_renderer: Renderer2);
    onGlobalClick(event: any): void;
    ngOnInit(): void;
    private hasIcon();
    private hasLabel();
    private onEnter();
    private onLeave();
    private onFocus();
    private onBlur();
    private trigger(tri);
    private drop_down();
    private drop_up();
}
