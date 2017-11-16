import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IconObj } from '@aui/component';
import { TextInputComponent, ValidateRet, ValidateHelper} from '@aui/component';
import { HasAValidateHandler, LengValidateHandler } from './test-validate-handers';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-text-input-info',
  templateUrl: './text-input-info.component.html',
  styleUrls: ['./text-input-info.component.scss']
})
export class TextInputInfoComponent implements AfterViewInit, OnInit {
  desc: string;
  icon: IconObj;
  tail: IconObj;
  label: string;
  value = '';
  defaultValue= '';
  vh: ValidateHelper;
  @ViewChild(TextInputComponent)
  private input: TextInputComponent;
  constructor() {
  }
  tailClick() {
    this.input.selectAll();
    // this.input.clearText();
  }
  validEmit(r: ValidateRet) {
    console.dir(r);
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

  }
}
