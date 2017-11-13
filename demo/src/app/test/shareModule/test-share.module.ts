import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestShareComponent } from './test-share.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestShareComponent],
  exports: [TestShareComponent]
})
export class TestShareModule {
  constructor() {}
}
