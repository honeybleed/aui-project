import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { IconManageService } from './service/icon-manage.service'
import { IconConfig } from './mode/icon-config';
@NgModule({
})
export class AuiCommonModule {
  static forRoot(config: IconConfig): ModuleWithProviders {
    return {
      ngModule: AuiCommonModule,
      providers: [
        IconManageService,
        {provide: IconConfig, useValue: config},
      ]
    }
  }
  constructor(@Optional() @SkipSelf() parentModule: AuiCommonModule) {
    if (parentModule) {
      console.error('IconModule is Loaded already!');
    }
  }
}
