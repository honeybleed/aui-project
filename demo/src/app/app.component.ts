import { Component } from '@angular/core';
import { IconObj } from '@aui/component';
import { IconManageService } from '@aui/common';

@Component({
  selector: 'aui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aui';
  iconObj: IconObj;
  constructor (private _ims: IconManageService) {
    const iconArray = this._ims.getIconMaps().get('common-icon').map;
    this.iconObj = {
      family: 'common-icon',
      name: 'window-close'
    };
    setInterval(() => {
      const random = parseInt(Math.random() * iconArray.length, 10);
      this.iconObj = {
        family: 'common-icon',
        name: iconArray[random].name
    };
    }, 1000);
  }
}
