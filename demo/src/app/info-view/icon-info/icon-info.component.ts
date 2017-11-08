import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IconManageService, IconMap, IconComponent } from '@aui/icon';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-icon-info',
  templateUrl: './icon-info.component.html',
  styleUrls: ['./icon-info.component.scss']
})
export class IconInfoComponent {
  @ViewChild(IconComponent) icon;
  desc: string;
  iconMap: Map<string, IconMap>;
  constructor(private _iconManageService: IconManageService) {
    this.desc = '@aui/icon 组件用以提供UI的图标字体配置，支持多字体。';
    this.iconMap = this._iconManageService.getIconMaps();
  }
  getIconFamilies(): IconMap[] {
    const families: IconMap[] = [];
    this.iconMap.forEach((value: IconMap, key: string) => {
      families.push(value);
    });
    return families;
  }
  showPosition($e) {
    $e.stopPropagation();
    console.log($e.srcElement.className + ' (' + $e.offsetX + ',' + $e.offsetY + ')');
  }

}
