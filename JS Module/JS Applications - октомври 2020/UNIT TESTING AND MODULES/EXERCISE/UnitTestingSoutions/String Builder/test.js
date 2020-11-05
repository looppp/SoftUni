let { assert } = require('chai');
const StringBuilder = require('./stringBuilder');


describe('StringBuilder', () => {
    let sb;

    beforeEach(() => {
        sb = new StringBuilder();
    });  

    describe('veryfyParam', () => {
        it('should trown error when input is not string', () => {
            assert.throws(() => {new StringBuilder(444);}, 'Argument must be string');
        });
    });

    describe('toString', () => {
        it('Should return correct input', () => {
            let sb = new StringBuilder('Pesho');
            assert.equal('Pesho', sb.toString());
        });
        it('Should return empty string', () => {
            assert.equal('', sb.toString());
        });
    });

    describe('append', () => {
        it('should return correct answer', () => {     
            sb.append('lol');  
            assert.equal(sb.toString(), 'lol');
        });
    });

    describe('remove', () => {
        it('should remove the string', () => {
            sb.remove(0, 3);
            assert.equal(sb.toString(), '');
        });
    });

    describe('prepend', () => {
        it('should return correct string structure', () => {
            sb.prepend('ello');
            sb.prepend('H');
            assert.equal(sb.toString(), 'Hello');
        });
    });

    describe('insertAt', () => {
        it('should return correctly inserted text', () => {
            sb.prepend('Hello');
            sb.insertAt(' my name is Pesho', 5);
            assert.equal(sb.toString(), 'Hello my name is Pesho');
        });
    });

});