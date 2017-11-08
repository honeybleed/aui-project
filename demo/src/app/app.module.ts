import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuiIconModule } from '@aui/icon';
import { LibTreeComponent } from './lib-tree/lib-tree.component';
import { RouterModule } from '@angular/router';
import { libRoutes } from './route';
import { LibInfoTitleComponent } from './lib-info/lib-info-title/lib-info-title.component';
import { IconInfoComponent } from './info-view/icon-info/icon-info.component';
import { LibInfoDescComponent } from './lib-info/lib-info-desc/lib-info-desc.component';
import { MarkdownModule } from 'angular2-markdown';
import { LibInfoUsageComponent } from './lib-info/lib-info-usage/lib-info-usage.component';
import { NestTestComponent } from './test/nest/nest-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LibTreeComponent,
    LibInfoTitleComponent,
    LibInfoDescComponent,
    LibInfoUsageComponent,
    IconInfoComponent,
    NestTestComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(libRoutes),
    AuiIconModule.forRoot([
      {
        family: 'desk',
        map: [
          {name: 'dir', code: '\ue628'},
          {name: 'config', code: '\ue603'},
          {name: 'power', code: '\ue64d'},
          {name: 'copy', code: '\ue8e0'}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
