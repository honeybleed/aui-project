# aui-text-input-build - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/aui-text-input-build.svg)](https://badge.fury.io/js/aui-text-input-build)
[![Build Status](https://travis-ci.org/honeybleed/aui-text-input-build.svg?branch=master)](https://travis-ci.org/honeybleed/aui-text-input-build)
[![Coverage Status](https://coveralls.io/repos/github/honeybleed/aui-text-input-build/badge.svg?branch=master)](https://coveralls.io/github/honeybleed/aui-text-input-build?branch=master)
[![dependency Status](https://david-dm.org/honeybleed/aui-text-input-build/status.svg)](https://david-dm.org/honeybleed/aui-text-input-build)
[![devDependency Status](https://david-dm.org/honeybleed/aui-text-input-build/dev-status.svg?branch=master)](https://david-dm.org/honeybleed/aui-text-input-build#info=devDependencies)

## Demo

View all the directives in action at https://honeybleed.github.io/aui-text-input-build

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@aui/text-input` via:
```shell
npm install --save @aui/text-input
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@aui/text-input`:
```js
map: {
  '@aui/text-input': 'node_modules/@aui/text-input/bundles/text-input.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from '@aui/text-input';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@aui/text-input';

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
import { LibModule } from '@aui/text-input';

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

