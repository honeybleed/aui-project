import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective } from './icon/icon.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { ActiveDirective } from './active/active.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActiveDirective,
    IconDirective,
    TextInputComponent
  ],
  exports: [
    ActiveDirective,
    IconDirective,
    TextInputComponent
  ]
})
export class AuiComponentModule {
  constructor () {}
}
