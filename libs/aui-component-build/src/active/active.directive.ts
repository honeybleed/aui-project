import { AfterViewInit, Directive, ElementRef, Host, HostListener, Input, Renderer2 } from '@angular/core';
import { ActiveOption } from '../common/active-option';
import { defaultActiveOption } from '../common/active-option';

@Directive({
  selector: '[auiActive]'
})
export class ActiveDirective implements AfterViewInit {
  private _aui_active: ActiveOption;
  private _point_cache: any[];
  @Input()
  set auiActive(v: ActiveOption) {
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
  }
  private activeEl: any;
  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }
  private appendRange() {
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
  private appendPoint() {
    const width = this._el.nativeElement.offsetWidth;
    const height = this._el.nativeElement.offsetHeight;
    const point = this._renderer.createElement('span');
    this._point_cache.push(point);
    const startD = Math.ceil( Math.max(width, height) / 4 );
    const distD = Math.ceil( Math.sqrt(width * width + height * height) );
    const zoom = Math.ceil(distD / startD);
    const startPosition = {
      left: Math.ceil( (width - startD) / 2 ),
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
    this._renderer.setStyle(point, 'transition', 'all ' + this._aui_active.speed  + 'ms ease-out');
    this._renderer.setStyle(point, 'transform', `scale(1)`);
    this._renderer.appendChild(this.activeEl, point);
    setTimeout(() => {
      this._renderer.setStyle(point, 'transform', `scale(${zoom})`);
    }, 0);
  }
  private removePoint() {
    const point = this._point_cache.pop();
    if (point) {
      setTimeout(() => {
        this._renderer.setStyle(point, 'transition', 'all .2s ease-out');
        this._renderer.setStyle(point, 'opacity', `0`);
      }, this._aui_active.speed);
      setTimeout(() => {
        this._renderer.removeChild(this.activeEl, point);
      }, this._aui_active.speed + 200);
    }
  }
  ngAfterViewInit(): void {
    this.appendRange();
    this._point_cache = [];
  }
  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    if (this._aui_active && this._aui_active.isActive && event.button === 0) {
      this.appendPoint();
    }
  }
  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    if (this._aui_active && this._aui_active.isActive && event.button === 0) {
      this.removePoint();
    }
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
    if (this._aui_active && this._aui_active.isActive && event.button === 0) {
      this.removePoint();
    }
  }
}
