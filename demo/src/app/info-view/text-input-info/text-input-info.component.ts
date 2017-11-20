import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IconObj } from '@aui/component';
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
  value = '';
  defaultValue= '';
  vh: ValidateHelper;
  activeStyle: ActiveOption;
  @ViewChild(TextInputComponent)
  private input: TextInputComponent;
  constructor() {
  }
  tailClick() {
    // if (this.type === 'text') {
    //   this.type = 'password';
    // } else {
    //   this.type = 'text';
    // }
    this.input.clearText();
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
  }
}
