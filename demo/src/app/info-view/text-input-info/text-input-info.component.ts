import { AfterViewInit, ChangeDetectorRef, Component, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { IconObj, DropDownBoxTriggerTarget } from '@aui/component';
import { TextInputComponent, ValidateRet, ValidateHelper, ActiveOption} from '@aui/component';
import { HasAValidateHandler, LengValidateHandler } from './test-validate-handers';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-text-input-info',
  templateUrl: './text-input-info.component.html',
  styleUrls: ['./text-input-info.component.scss']
})
export class TextInputInfoComponent implements AfterViewInit, OnInit {
  type = 'text';
  desc: string;
  icon: IconObj;
  tail: IconObj;
  label: string;
  dropTrigger = DropDownBoxTriggerTarget.TriggerOnTail;
  value = '';
  defaultValue= '';
  vh: ValidateHelper;
  activeStyle: ActiveOption;
  newStyle: ActiveOption;
  @ViewChild(TextInputComponent)
  private input: TextInputComponent;
  constructor(private _renderer: Renderer2, private _cdr: ChangeDetectorRef) {
  }
  tailClick() {
    this.input.clearText();
  }
  buttonClick() {
    console.log('button click');
  }
  validEmit(r: ValidateRet) {
    console.dir(r);
  }
  doClick() {
    this.input.focusInput();
  }
  ngAfterViewInit(): void {
     this.input.focusInput();
     this.input.selectAll();
  }
  ngOnInit(): void {
    this.defaultValue = '123123123';
    this.desc = '@aui/text-input 组件用以提供单行文字输入和密码输入的输入框';
    this.icon = {
      family: 'common-icon',
      name: 'eye'
    };
    this.tail = {
      family: 'common-icon',
      name: 'window-close'
    };
    this.label = 'label';
    this.vh = new ValidateHelper([new LengValidateHandler(10, 5, 'l error'), new HasAValidateHandler('no a')], 'test success');
    this.activeStyle = {
      isActive: true
    };
    this.newStyle = {
      isActive: true,
      color: 'rgba(255,0,0,.2)'
    };
  }
  onDropDown(event) {
    console.dir(event);
    const ele = event.view.nativeElement;
    if (event.isDown) {
      const viewHeight = ele.offsetHeight;
      this._renderer.setStyle(ele, 'transition', 'all, .4s');
      this._renderer.setStyle(ele, 'height', '0px');
      setTimeout(() => {
        this._renderer.setStyle(ele, 'height', viewHeight + 'px');
      }, 0);
    } else {
      // this._renderer.removeStyle(ele, 'transition');
      this._renderer.removeStyle(ele, 'height');
    }
  }
}
