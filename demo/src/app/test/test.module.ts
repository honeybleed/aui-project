import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconManageService } from '@aui/common';

@NgModule({
  imports: [CommonModule]
})
export class TestModule {
  constructor(private _ims: IconManageService) {
    console.dir(this._ims);
  }
}

