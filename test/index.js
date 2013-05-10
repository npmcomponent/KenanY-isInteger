var isInteger = require('..');

describe('isInteger(x)', function() {
  it('should return true for integers', function() {
    isInteger(1254).should.equal(true);
  });
});