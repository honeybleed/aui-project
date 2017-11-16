import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuiCommonModule, IconManageService } from '@aui/common';
import { AuiComponentModule } from '@aui/component';
import { LibTreeComponent } from './lib-tree/lib-tree.component';
import { RouterModule } from '@angular/router';
import { libRoutes } from './route';
import { LibInfoTitleComponent } from './lib-info/lib-info-title/lib-info-title.component';
import { IconInfoComponent } from './info-view/icon-info/icon-info.component';
import { LibInfoDescComponent } from './lib-info/lib-info-desc/lib-info-desc.component';
import { MarkdownModule } from 'angular2-markdown';
import { LibInfoUsageComponent } from './lib-info/lib-info-usage/lib-info-usage.component';
import { NestTestComponent } from './test/nest/nest-test.component';
import { TextInputInfoComponent } from './info-view/text-input-info/text-input-info.component';
import { TestModule } from './test/test.module';
import { TestCoreModule } from './test/coreModule/test-core.module';
import { TestShareModule } from './test/shareModule/test-share.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LibTreeComponent,
    LibInfoTitleComponent,
    LibInfoDescComponent,
    LibInfoUsageComponent,
    IconInfoComponent,
    TextInputInfoComponent,
    NestTestComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(libRoutes),
    AuiCommonModule.forRoot([
      {
        family: 'desk',
        map: [
          {name: 'dir', code: '\ue628'},
          {name: 'config', code: '\ue603'},
          {name: 'power', code: '\ue64d'},
          {name: 'copy', code: '\ue8e0'}
        ]
      }
    ]),
    AuiComponentModule,
    TestModule,
    TestCoreModule.forRoot({
      value: 'hello'
    }),
    TestShareModule
  ],
  providers: [IconManageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _ims: IconManageService) {
    console.dir(this._ims);
  }
}
