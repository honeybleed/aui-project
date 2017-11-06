import { OnInit } from '@angular/core';
import { IconManageService } from '../service/icon-manage.service';
import { IconItem } from '../mode/icon-item';
export declare class IconComponent implements OnInit {
    private _iconManageService;
    family: string;
    icon: string;
    constructor(_iconManageService: IconManageService);
    findIcon(): IconItem;
    ngOnInit(): void;
}
