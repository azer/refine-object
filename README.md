## refine-object

Create a new object from given another one.

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

It can parse object paths. See [get-object-path](http://github.com/azer/object-path) for details:

```js
refine = require('refine-object')

original = {
  delicious: {
    fruits: ['orange', 'grape'],
    food: ['hamsi', 'dolma']
  }
}

refine({ food: 'delicious.food[0]', fruit: 'delicious.fruits[0]' })
// => { food: 'hamsi', fruit: 'orange' }
```
