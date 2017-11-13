import { Directive, ElementRef, Input } from '@angular/core';
import { IconManageService } from '@aui/common';
export class IconObj {
  family: string;
  name: string;
}
@Directive({
  selector: '[auiIcon]'
})
export class IconDirective {
  private _iconObj: IconObj;
  @Input()
  set iconObj (obj: IconObj) {
    this._iconObj = obj;
    this._renderIcon();
  }
  constructor( private _el: ElementRef, private _ims: IconManageService ) {
    this._renderIcon();
  }
  private _renderIcon() {
    if (this._iconObj) {
      this._el.nativeElement.innerText = this._ims.getIcon(this._iconObj.family, this._iconObj.name).code;
      this._el.nativeElement.style.fontFamily = this._iconObj.family;
    }
  }
}
