## refine-object

Create a new object from given another one

## Install

```bash
$ npm install refine-object
```

## Usage

```js
refine = require('refine-object')

original = {
  foo: 123,
  bar: 456,
  qux: 789
}

refine({ first: 'foo', second: 'bar' })(original)
// => { first: 123, second: 456 }
```
