import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective } from './icon/icon.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { ActiveDirective } from './active/active.directive';
import { ButtonComponent } from './button/button.component';
import { SelectorComponent } from './selector/selector.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActiveDirective,
    IconDirective,
    TextInputComponent,
    ButtonComponent,
    SelectorComponent,
    OptionComponent
  ],
  exports: [
    ActiveDirective,
    IconDirective,
    TextInputComponent,
    ButtonComponent,
    SelectorComponent,
    OptionComponent
  ]
})
export class AuiComponentModule {
  constructor () {}
}
