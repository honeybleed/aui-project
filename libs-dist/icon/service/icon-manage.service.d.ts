import { IconMap } from '../mode/icon-map';
import { IconItem } from '../mode/icon-item';
import { IconConfig } from '../mode/icon-config';
/**
 * Config and read icon families
 */
export declare class IconManageService {
    private _icon_map_cache;
    constructor(config: IconConfig);
    getIconFamilies(): string[];
    getIconMaps(): Map<string, IconMap>;
    getIcon(family: string, name: string): IconItem;
}
