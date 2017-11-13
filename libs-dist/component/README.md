# aui-component-build - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/aui-component-build.svg)](https://badge.fury.io/js/aui-component-build)
[![Build Status](https://travis-ci.org/honeybleed/aui-component-build.svg?branch=master)](https://travis-ci.org/honeybleed/aui-component-build)
[![Coverage Status](https://coveralls.io/repos/github/honeybleed/aui-component-build/badge.svg?branch=master)](https://coveralls.io/github/honeybleed/aui-component-build?branch=master)
[![dependency Status](https://david-dm.org/honeybleed/aui-component-build/status.svg)](https://david-dm.org/honeybleed/aui-component-build)
[![devDependency Status](https://david-dm.org/honeybleed/aui-component-build/dev-status.svg?branch=master)](https://david-dm.org/honeybleed/aui-component-build#info=devDependencies)

## Demo

View all the directives in action at https://honeybleed.github.io/aui-component-build

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@aui/component` via:
```shell
npm install --save @aui/component
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@aui/component`:
```js
map: {
  '@aui/component': 'node_modules/@aui/component/bundles/component.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from '@aui/component';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@aui/component';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from '@aui/component';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Aaron. Licensed under the MIT License (MIT)

