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

it('can parse object paths', function(){
  var foobar = refine({
    foo: 'such.perform.so.scale',
    bar: 'delicious eggs :)[0]',
    qux: 'delicious eggs :)[1]',
    corge: {
      lorem: {
        ipsum: 'rest.sit',
        dolor: 'rest.amet',
        nil: 'rest.non.existing.things'
      }
    }
  });

  var result = foobar({
    such: { perform: { so: { scale: 'leveldb' } } },
    'delicious eggs :)': ['white egg', 'brown egg'],
    rest: {
      sit: 'span',
      amet: 'eggs'
    }
  });

  expect(result.foo).to.equal('leveldb');
  expect(result.bar).to.equal('white egg');
  expect(result.qux).to.equal('brown egg');
  expect(result.corge.lorem.ipsum).to.equal('span');
  expect(result.corge.lorem.dolor).to.equal('eggs');
  expect(result.corge.lorem.nil).to.not.exist;
});
