[![NPM
version](https://img.shields.io/npm/v/printr.svg?style=flat-square)](https://www.npmjs.org/package/printr)
[![Build Status](https://img.shields.io/travis/vesln/printr.svg?style=flat-square)](http://travis-ci.org/vesln/printr)
[![Dependencies](http://img.shields.io/david/vesln/printr.svg?style=flat-square)](https://david-dm.org/vesln/printr)
[![Dev Dependencies](http://img.shields.io/david/dev/vesln/printr.svg?style=flat-square)](https://david-dm.org/vesln/printr)

# printr

## Usage

```js
var Printr = require('printr');

var printr new Printr({
  out: process.stdout, // out stream, default
  err: process.stderr, // err stream, default
  prefix: '-test-: ',   // prefix, default: ''
});

printr.error.print('Hello');
printr.error.println('Hello');
printr.error.write('H');
printr.error.write('i');

printr.out.print('Hi');
printr.out.println('Hi');
printr.out.write('H');
printr.out.write('i');
```

stderr:
```
-test-: Hello\n
-test-: Hello\n
Hi
```

stdout:
```
-test-: Hi\n
-test-: Hi\n
Hi
```

## Tests

```
$ npm install
$ npm test
```

## Authors

- [Veselin Todorov](https://github.com/vesln)

## License

The MIT License (see LICENSE)
