# penrillian-camelize

Recursively transform key strings to camel-case.

# example

``` js
var camelize = require('camelize');
var obj = {
    fee_fie_foe: 'fum',
    beep_boop: [
        { "KeyID": "abc" },
        { 'abc.xyz': 'mno' },
        { 'foo-bar': 'baz' }
    ]
};
var res = camelize(obj);
console.log(JSON.stringify(res, null, 2));
```

output:

```
{
  "feeFieFoe": "fum",
  "beepBoop": [
    {
      "keyId": "abc"
    },
    {
      "abcXyz": "mno"
    },
    {
      "fooBar": "baz"
    }
  ]
}
```

# methods

``` js
var penrillianCamelize = require('penrillian-camelize')
```

## camelize(obj)

Convert the key strings in `obj` to camel-case recursively.

# install

With [npm](https://npmjs.org) do:

```
npm install penrillian-camelize
```

To use in the browser, use [browserify](http://browserify.org).

# license

MIT
