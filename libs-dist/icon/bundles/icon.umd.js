(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.auiIcon = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
        { name: 'window-close', code: '\ue93b' }
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
        for (var _i = 0, _a = config; _i < _a.length; _i++) {
            var mapItem = _a[_i];
            if (this._icon_map_cache.has(mapItem.family)) {
                console.warn('IconMap family named [' + mapItem.family + '] is overwrote!');
                this._icon_map_cache.set(mapItem.family, mapItem);
            }
            else {
                this._icon_map_cache.set(mapItem.family, mapItem);
            }
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
        for (var /** @type {?} */ family in this._icon_map_cache) {
            if (family) {
                maps.set(family, this._icon_map_cache.get(family));
            }
        }
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

var IconComponent = (function () {
    /**
     * @param {?} _iconManageService
     */
    function IconComponent(_iconManageService) {
        this._iconManageService = _iconManageService;
    }
    /**
     * @return {?}
     */
    IconComponent.prototype.findIcon = function () {
        return this._iconManageService.getIcon(this.family, this.icon);
    };
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = function () {
    };
    return IconComponent;
}());
IconComponent.decorators = [
    { type: core.Component, args: [{
                encapsulation: core.ViewEncapsulation.None,
                selector: 'aui-icon',
                template: "\n    <span [style.font-family]=\"family\">{{findIcon().code}}</span>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
IconComponent.ctorParameters = function () { return [
    { type: IconManageService, },
]; };
IconComponent.propDecorators = {
    'family': [{ type: core.Input },],
    'icon': [{ type: core.Input },],
};

var AuiIconModule = (function () {
    /**
     * @param {?} parentModule
     */
    function AuiIconModule(parentModule) {
        if (parentModule) {
            console.error('IconModule is Loaded already!');
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    AuiIconModule.forRoot = function (config) {
        return {
            ngModule: AuiIconModule,
            providers: [
                { provide: IconConfig, useValue: config }
            ]
        };
    };
    return AuiIconModule;
}());
AuiIconModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                providers: [IconManageService],
                declarations: [IconComponent],
                exports: [IconComponent]
            },] },
];
/**
 * @nocollapse
 */
AuiIconModule.ctorParameters = function () { return [
    { type: AuiIconModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf },] },
]; };

// export * from './your/main.module';

/**
 * Generated bundle index. Do not edit.
 */

exports.AuiIconModule = AuiIconModule;
exports.IconManageService = IconManageService;
exports.IconComponent = IconComponent;
exports.IconConfig = IconConfig;
exports.IconMap = IconMap;
exports.commonIcons = commonIcons;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=icon.umd.js.map
