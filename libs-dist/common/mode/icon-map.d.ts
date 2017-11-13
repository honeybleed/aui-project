import { IconItem } from './icon-item';
/**
 *  class to describe a group of icon by one font-family
 */
export declare class IconMap {
    /**
     * font family to split different icons
     */
    family: string;
    /**
     *
     */
    map: IconItem[];
}
export declare const commonIcons: IconMap;
