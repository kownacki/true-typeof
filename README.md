[![Build Status](https://travis-ci.org/kownacki/true-typeof.svg?branch=master)](https://travis-ci.org/kownacki/true-typeof)
[![Greenkeeper badge](https://badges.greenkeeper.io/kownacki/true-typeof.svg)](https://greenkeeper.io/)

# true-typeof

Get correct type of value as specified in ECMAScript specification about language types http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-data-types-and-values

## Installation

$ npm install true-typeof

## API

```javascript
var trueTypeof = require("true-typeof");
```

```javascript
trueTypeof(value); // → type
```

+ *value* - Any value. Object or primitive.

Returns a string with correct JavaScript language type.

Examples:

```javascript
trueTypeof(null); // → "null"
trueTypeof(function() {}); // → "object"
```

For values other that `null` and functions it works exactly like standard `typeof`.

## License

MIT
