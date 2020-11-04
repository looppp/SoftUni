let {assert} = require('chai');
const StringBuilder = require('./stringBuilder');


describe('StringBuilder', () => {
    let sb = new StringBuilder();

    describe('veryfyParam', () => {
        it('shoud trown error when input is not string', () => {
            assert.throws('Argument must be string', new StringBuilder(444));
        });
        
    });

    
});