import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
export declare class ActiveDirective implements AfterViewInit {
    private _el;
    private _renderer;
    private activeEl;
    constructor(_el: ElementRef, _renderer: Renderer2);
    private appendRange();
    private appendPoint();
    ngAfterViewInit(): void;
    onMouseDown(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
}
