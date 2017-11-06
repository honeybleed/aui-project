import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconManageService } from './service/icon-manage.service';
import { IconComponent } from './component/icon.component';
import { IconConfig } from './mode/icon-config';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [IconManageService],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class AuiIconModule {
  static forRoot(config: IconConfig): ModuleWithProviders {
    return {
      ngModule: AuiIconModule,
      providers: [
        {provide: IconConfig, useValue: config}
      ]
    }
  }
  constructor(@Optional() @SkipSelf() parentModule: AuiIconModule) {
    if (parentModule) {
      console.error('IconModule is Loaded already!');
    }
  }
}
