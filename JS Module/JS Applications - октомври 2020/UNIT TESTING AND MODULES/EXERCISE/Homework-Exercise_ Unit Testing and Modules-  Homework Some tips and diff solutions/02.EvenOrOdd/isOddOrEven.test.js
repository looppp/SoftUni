const assert = require('chai').assert;
const isOddOrEven = require('./isOddOrEven');

describe('Test Odd or Even', function() {
    it('should return undefined for non-string', function() {
        assert.isUndefined(isOddOrEven(5));
    });

    it('should return even', function() {
        assert.equal(isOddOrEven('test'), 'even');
    });

    it('should return odd', function() {
        assert.equal(isOddOrEven('test1'), 'odd');
    });
});