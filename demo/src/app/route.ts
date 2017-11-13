import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IconInfoComponent } from './info-view/icon-info/icon-info.component';
import { TextInputInfoComponent } from './info-view/text-input-info/text-input-info.component';
export const libRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'icon', component: IconInfoComponent},
  {path: 'text-input', component: TextInputInfoComponent}
];
