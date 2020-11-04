let {assert} = require('chai');
const StringBuilder = require('./stringBuilder');


describe('StringBuilder', () => {
    let sb = new StringBuilder();

    describe('append', () => {
        it('shoud return an error if input isnt a string', () => {
            assert.equal('Argument must be string', sb.append('53'));
        });
    });
});