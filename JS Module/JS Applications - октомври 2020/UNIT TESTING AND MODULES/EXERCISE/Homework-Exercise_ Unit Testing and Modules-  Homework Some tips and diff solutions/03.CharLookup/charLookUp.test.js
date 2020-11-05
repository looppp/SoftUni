const assert = require('chai').assert;
const lookupChar = require('./charLookUp');

describe('Test CharLookUp', function() {
    it('should return undefined for non-string', function() {
        assert.isUndefined(lookupChar(0, 0));
    });

    it('should return undefined for non-integer index', function() {
        assert.isUndefined(lookupChar('test', 3.14));
    });

    it('should return undefined for invalid params', function() {
        assert.isUndefined(lookupChar(0, 3.14));
    });

    it('should return incorrect index for negative index', function() {
        assert.equal(lookupChar('test', -1), 'Incorrect index');
    });

    it('should return incorrect index for bigger index', function() {
        assert.equal(lookupChar('test', 4), 'Incorrect index');
    });

    it('should return incorrect index for bigger index', function() {
        assert.equal(lookupChar('test', 5), 'Incorrect index');
    });

    it('should return correct char', function() {
        assert.equal(lookupChar('test', 0), 't');
    });

    it('should return correct char', function() {
        assert.equal(lookupChar('test', 1), 'e');
    });
})