const app = require('./lookUp');
const assert = require('chai').assert;

describe('charLookUp', () => {
    it('shoud return undefined if input string is not of type string', () => {
        assert.equal(undefined, app.lookupChar(1234, 2));
    });
    it('shoud return undefined if index is not a number', () => {
        assert.equal(undefined, app.lookupChar('hello', 'hello'));
    });
    it('shoud return incorect index if it is bigger than the string length', () => {
        assert.equal("Incorrect index", app.lookupChar('helo', 5));
    });
    it('shoud return incorect index if it is bigger than the string length', () => {
        assert.equal("Incorrect index", app.lookupChar('helo', -5));
    });
    
    it('shoud return correct char', () => {
        assert.equal('o', app.lookupChar('heoooo', 3));
    });

});