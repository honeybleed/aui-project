import { ElementRef } from '@angular/core';
import { IconManageService } from '@aui/common';
export declare class IconObj {
    family: string;
    name: string;
}
export declare class IconDirective {
    private _el;
    private _ims;
    private _iconObj;
    iconObj: IconObj;
    constructor(_el: ElementRef, _ims: IconManageService);
    private _renderIcon();
}
