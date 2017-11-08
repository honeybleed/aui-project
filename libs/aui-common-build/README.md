# aui-common-build - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/aui-common-build.svg)](https://badge.fury.io/js/aui-common-build)
[![Build Status](https://travis-ci.org/honeybleed/aui-common-build.svg?branch=master)](https://travis-ci.org/honeybleed/aui-common-build)
[![Coverage Status](https://coveralls.io/repos/github/honeybleed/aui-common-build/badge.svg?branch=master)](https://coveralls.io/github/honeybleed/aui-common-build?branch=master)
[![dependency Status](https://david-dm.org/honeybleed/aui-common-build/status.svg)](https://david-dm.org/honeybleed/aui-common-build)
[![devDependency Status](https://david-dm.org/honeybleed/aui-common-build/dev-status.svg?branch=master)](https://david-dm.org/honeybleed/aui-common-build#info=devDependencies)

## Demo

View all the directives in action at https://honeybleed.github.io/aui-common-build

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@aui/common` via:
```shell
npm install --save @aui/common
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@aui/common`:
```js
map: {
  '@aui/common': 'node_modules/@aui/common/bundles/common.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from '@aui/common';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@aui/common';

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
import { LibModule } from '@aui/common';

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

