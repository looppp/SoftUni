let { assert } = require('chai');
let PaymentPackage = require('./paymentPackage');

describe('PaymentPackage', () => {
    describe('constructor', () => {
        it('should work properly with 2 params', () => {
            let payPack = new PaymentPackage('Pesho', 5);
            let expected = new PaymentPackage('Pesho', 5);
            assert.deepEqual(payPack, expected);
        });

        it('should work properly with 2 params second version', () => {
            let payPack = new PaymentPackage('Pesho', 5);
            assert.equal('Pesho', payPack.name);
            assert.equal(5, payPack.value);
        });
        it('should throw exception with incorect name', () => {
            assert.throws(() => { 
                let payPack = new PaymentPackage(5, 5);
            }, 'Name must be a non-empty string');
        });
        it('should throw exception with empty name', () => {
            assert.throws(() => { 
                let payPack = new PaymentPackage('', 5);
            }, 'Name must be a non-empty string');
        });

        it('should throw exception with incorect value', () => {
            assert.throws(() => { 
                let payPack = new PaymentPackage('lolo', 'lolo');
            }, 'Value must be a non-negative number');
        });
        it('should throw exception with no value', () => {
            assert.throws(() => { 
                let payPack = new PaymentPackage('lolo');
            }, 'Value must be a non-negative number');
        });
        it('should throw exception with negaive number', () => {
            assert.throws(() => { 
                let payPack = new PaymentPackage('lolo', -5);
            }, 'Value must be a non-negative number');
        });
    });
});
