var refine = require("./");

it('returns a new function that creates objects from given others', function(){
  var getFirstTwo = refine({ first: 'foo', second: 'bar' });
  var firstTwo = getFirstTwo({
    foo: 123,
    bar: 456,
    qux: 789
  });

  expect(Object.keys(firstTwo)).to.deep.equal(['first', 'second']);
  expect(firstTwo.first).to.equal(123);
  expect(firstTwo.second).to.equal(456);
});
