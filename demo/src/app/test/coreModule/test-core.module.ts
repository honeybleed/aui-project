import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestConfig, TestCoreService } from './test-core.service';

@NgModule({
  imports: [CommonModule],
  providers: [TestCoreService]
})
export class TestCoreModule {
  constructor() {}
  static forRoot(config: TestConfig): ModuleWithProviders {
    return {
      ngModule: TestCoreModule,
      providers: [
        {provide: TestConfig, useValue: config}
      ]
    };
  }
}
