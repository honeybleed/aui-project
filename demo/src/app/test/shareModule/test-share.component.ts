import { Component } from '@angular/core';
import { TestCoreService } from '../coreModule/test-core.service';

@Component({
  selector: 'aui-test-component',
  template: '<div> {{getValue()}} </div>'
})
export class TestShareComponent {
  constructor(private _ts: TestCoreService) {
  }
  getValue() {
    return this._ts.configString;
  }
}

