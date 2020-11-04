const app = require('./evenOrOdd');
const assert = require('chai').assert;

describe('evenOrOdd', () => {
    it('shoud return undefined', () => {
        assert.equal(undefined, app.isOddOrEven(3));
    });

    it('shoud return odd', () => {
        assert.equal('odd', app.isOddOrEven('lol'));
    });

    it('shoud return even', () => {
        assert.equal('even', app.isOddOrEven('hehe'));
    });
});