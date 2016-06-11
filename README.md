[![NPM
version](https://img.shields.io/npm/v/printr.svg?style=flat-square)](https://www.npmjs.org/package/printr)
[![Build Status](https://img.shields.io/travis/vesln/printr.svg?style=flat-square)](http://travis-ci.org/vesln/printr)
[![Dependencies](http://img.shields.io/david/vesln/printr.svg?style=flat-square)](https://david-dm.org/vesln/printr)
[![Dev Dependencies](http://img.shields.io/david/dev/vesln/printr.svg?style=flat-square)](https://david-dm.org/vesln/printr)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

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
