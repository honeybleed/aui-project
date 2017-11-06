import { IconItem } from './icon-item';

/**
 *  class to describe a group of icon by one font-family
 */
export class IconMap {
  /**
   * font family to split different icons
   */
  public family: string;
  /**
   *
   */
  public map: IconItem[];
}

export const commonIcons: IconMap = {
  family: 'common-icon',
  map: [
    {name: 'window-close', code: '\ue93b'}
  ]
};
