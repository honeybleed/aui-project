import { Injectable, NgModule, Optional, SkipSelf } from '@angular/core';

/**
 *  class to describe a group of icon by one font-family
 */
class IconMap {
}
const commonIcons = {
    family: 'common-icon',
    map: [
        { name: 'window-close', code: '\ue93b' },
        { name: 'eye', code: '\ue722' },
        { name: 'check', code: '\ue69c' },
        { name: 'alert-circle-outline', code: '\ue614' }
    ]
};

class IconConfig {
}

/**
 * Config and read icon families
 */
class IconManageService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this._icon_map_cache = new Map();
        this._icon_map_cache.set(commonIcons.family, commonIcons);
        if (config) {
            for (const mapItem of config) {
                if (this._icon_map_cache.has(mapItem.family)) {
                    console.warn('IconMap family named [' + mapItem.family + '] is overwrote!!');
                    this._icon_map_cache.set(mapItem.family, mapItem);
                }
                else {
                    this._icon_map_cache.set(mapItem.family, mapItem);
                }
            }
        }
        else {
            console.log('no config of IconManageService');
        }
    }
    /**
     * @return {?}
     */
    getIconFamilies() {
        const /** @type {?} */ families = [];
        for (const /** @type {?} */ family in this._icon_map_cache) {
            if (family) {
                families.push(family);
            }
        }
        return families;
    }
    /**
     * @return {?}
     */
    getIconMaps() {
        const /** @type {?} */ maps = new Map();
        this._icon_map_cache.forEach((value, key) => {
            maps.set(key, value);
        });
        return maps;
    }
    /**
     * @param {?} family
     * @param {?} name
     * @return {?}
     */
    getIcon(family, name) {
        const /** @type {?} */ t_family = this._icon_map_cache.get(family);
        if (!t_family) {
            return null;
        }
        const /** @type {?} */ t_item = t_family.map.find((value) => {
            return value.name === name;
        });
        if (!t_item) {
            return null;
        }
        return {
            name: t_item.name,
            code: t_item.code
        };
    }
}
IconManageService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
IconManageService.ctorParameters = () => [
    { type: IconConfig, decorators: [{ type: Optional },] },
];

class AuiCommonModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            console.error('IconModule is Loaded already!');
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AuiCommonModule,
            providers: [
                IconManageService,
                { provide: IconConfig, useValue: config },
            ]
        };
    }
}
AuiCommonModule.decorators = [
    { type: NgModule, args: [{},] },
];
/**
 * @nocollapse
 */
AuiCommonModule.ctorParameters = () => [
    { type: AuiCommonModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
];

// export * from './your/main.module';

/**
 * Generated bundle index. Do not edit.
 */

export { AuiCommonModule, IconManageService, IconMap, commonIcons, IconConfig };
//# sourceMappingURL=common.js.map
