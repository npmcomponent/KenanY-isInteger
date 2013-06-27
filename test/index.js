var isInteger = require('../');
var test = require('tape');

test('isInteger(x)', function(t) {
    t.plan(15);

    var expected = 'boolean'
    t.equal(typeof isInteger([]), expected);
    t.equal(typeof isInteger(true), expected);
    t.equal(typeof isInteger(false), expected);
    t.equal(typeof isInteger(new Date), expected);
    t.equal(typeof isInteger({}), expected);
    t.equal(typeof isInteger(undefined), expected);
    t.equal(typeof isInteger(Infinity), expected);
    t.equal(typeof isInteger(NaN), expected);
    t.equal(typeof isInteger(null), expected);
    t.equal(typeof isInteger(0), expected);
    t.equal(typeof isInteger({ 'a': 1 }), expected);
    t.equal(typeof isInteger('a'), expected);

    t.equal(isInteger(1), true);
    t.equal(isInteger(1.0), true);
    t.equal(isInteger(1.1), false);
});