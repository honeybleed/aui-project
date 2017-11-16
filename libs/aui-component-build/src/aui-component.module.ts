import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective } from './icon/icon.directive';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconDirective,
    TextInputComponent
  ],
  exports: [
    IconDirective,
    TextInputComponent
  ]
})
export class AuiComponentModule {
  constructor () {}
}
