(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.auiCommon = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

/**
 *  class to describe a group of icon by one font-family
 */
var IconMap = (function () {
    function IconMap() {
    }
    return IconMap;
}());
var commonIcons = {
    family: 'common-icon',
    map: [
        { name: 'window-close', code: '\ue93b' },
        { name: 'eye', code: '\ue722' },
        { name: 'check', code: '\ue69c' },
        { name: 'alert-circle-outline', code: '\ue614' },
        { name: 'arrow-down', code: '\ue600' }
    ]
};

var IconConfig = (function () {
    function IconConfig() {
    }
    return IconConfig;
}());

/**
 * Config and read icon families
 */
var IconManageService = (function () {
    /**
     * @param {?} config
     */
    function IconManageService(config) {
        this._icon_map_cache = new Map();
        this._icon_map_cache.set(commonIcons.family, commonIcons);
        if (config) {
            for (var _i = 0, _a = config; _i < _a.length; _i++) {
                var mapItem = _a[_i];
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
    IconManageService.prototype.getIconFamilies = function () {
        var /** @type {?} */ families = [];
        for (var /** @type {?} */ family in this._icon_map_cache) {
            if (family) {
                families.push(family);
            }
        }
        return families;
    };
    /**
     * @return {?}
     */
    IconManageService.prototype.getIconMaps = function () {
        var /** @type {?} */ maps = new Map();
        this._icon_map_cache.forEach(function (value, key) {
            maps.set(key, value);
        });
        return maps;
    };
    /**
     * @param {?} family
     * @param {?} name
     * @return {?}
     */
    IconManageService.prototype.getIcon = function (family, name) {
        var /** @type {?} */ t_family = this._icon_map_cache.get(family);
        if (!t_family) {
            return null;
        }
        var /** @type {?} */ t_item = t_family.map.find(function (value) {
            return value.name === name;
        });
        if (!t_item) {
            return null;
        }
        return {
            name: t_item.name,
            code: t_item.code
        };
    };
    return IconManageService;
}());
IconManageService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
IconManageService.ctorParameters = function () { return [
    { type: IconConfig, decorators: [{ type: core.Optional },] },
]; };

var AuiCommonModule = (function () {
    /**
     * @param {?} parentModule
     */
    function AuiCommonModule(parentModule) {
        if (parentModule) {
            console.error('IconModule is Loaded already!');
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    AuiCommonModule.forRoot = function (config) {
        return {
            ngModule: AuiCommonModule,
            providers: [
                IconManageService,
                { provide: IconConfig, useValue: config },
            ]
        };
    };
    return AuiCommonModule;
}());
AuiCommonModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
/**
 * @nocollapse
 */
AuiCommonModule.ctorParameters = function () { return [
    { type: AuiCommonModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf },] },
]; };

// export * from './your/main.module';

/**
 * Generated bundle index. Do not edit.
 */

exports.AuiCommonModule = AuiCommonModule;
exports.IconManageService = IconManageService;
exports.IconMap = IconMap;
exports.commonIcons = commonIcons;
exports.IconConfig = IconConfig;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=common.umd.js.map
