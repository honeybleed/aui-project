import {
  Component, Input, OnInit,
  ViewEncapsulation
} from '@angular/core';
import { IconManageService } from '../service/icon-manage.service';
import { IconItem } from '../mode/icon-item';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() family: string;
  @Input() icon: string;
  constructor(private _iconManageService: IconManageService) { }
  findIcon(): IconItem {
    return this._iconManageService.getIcon(this.family, this.icon);
  }
  ngOnInit() {
  }
}
