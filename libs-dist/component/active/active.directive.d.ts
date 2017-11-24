import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ActiveOption } from '../common/active-option';
export declare class ActiveDirective implements AfterViewInit {
    private _el;
    private _renderer;
    private _aui_active;
    private _point_cache;
    auiActive: ActiveOption;
    private activeEl;
    constructor(_el: ElementRef, _renderer: Renderer2);
    private appendRange();
    private appendPoint();
    private removePoint();
    ngAfterViewInit(): void;
    onMouseDown(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    onMouseLeave(event: MouseEvent): void;
}
