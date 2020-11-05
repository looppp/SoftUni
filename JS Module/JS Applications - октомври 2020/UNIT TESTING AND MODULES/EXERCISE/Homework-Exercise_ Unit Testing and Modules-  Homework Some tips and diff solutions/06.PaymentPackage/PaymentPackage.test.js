const assert = require('chai').assert;
const PaymentPackage = require('./PaymentPackage');

describe('Test Payment Package', function () {
    describe('Constructor and Accessors', function () {
        it('has properties', function () {
            let paymentPackage = new PaymentPackage('Test', 10);

            assert.isTrue(Object.getPrototypeOf(paymentPackage).hasOwnProperty('name'));
            assert.isTrue(Object.getPrototypeOf(paymentPackage).hasOwnProperty('value'));
            assert.isTrue(Object.getPrototypeOf(paymentPackage).hasOwnProperty('VAT'));
            assert.isTrue(Object.getPrototypeOf(paymentPackage).hasOwnProperty('active'));
        });

        it('should return correct values', function () {
            let paymentPackage = new PaymentPackage('Test', 10);

            assert.equal(paymentPackage.name, 'Test');
            assert.equal(paymentPackage.value, 10);
            assert.equal(paymentPackage.VAT, 20);
            assert.isTrue(paymentPackage.active);
        });

        it('should throw when invalid name', function () {
            assert.throw(() => new PaymentPackage('', 10));
            assert.throw(() => new PaymentPackage({}, 10));
            assert.throw(() => new PaymentPackage([], 10));
        });

        it('should throw when invalid value', function () {
            assert.throw(() => new PaymentPackage('Test', ''));
            assert.throw(() => new PaymentPackage('Test', {}));
            assert.throw(() => new PaymentPackage('Test', []));
        });

        it('should throw when invalid VAT', function () {
            let paymentPackage = new PaymentPackage('Test', 10);

            assert.throw(() => paymentPackage.VAT = '');
            assert.throw(() => paymentPackage.VAT = -1);
        });

        it('should not throw when valid VAT', function () {
            let paymentPackage = new PaymentPackage('Test', 10);

            assert.doesNotThrow(() => paymentPackage.VAT = 30);
            assert.equal(paymentPackage.VAT, 30);
        });

        it('should throw when invalid active', function () {
            let paymentPackage = new PaymentPackage('Test', 10);

            assert.throw(() => paymentPackage.active = '');
            assert.throw(() => paymentPackage.active = -1);
        });

        it('should not throw when valid active', function () {
            let paymentPackage = new PaymentPackage('Test', 10);

            assert.doesNotThrow(() => paymentPackage.active = true);
            assert.doesNotThrow(() => paymentPackage.active = false);
            assert.isFalse(paymentPackage.active);
        });
    });

    describe('Functionality', function () {
        let paymentPackage;

        beforeEach(() => {
            paymentPackage = new PaymentPackage('Test', 1000);
        });

        it('has correct output', function() {
            let result = paymentPackage.toString();
            let output = `Package: Test\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200`;

            assert.equal(result, output);
        });

        it('has correct output', function() {
            paymentPackage.active = false;
            let result = paymentPackage.toString();
            let output = `Package: Test (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200`;

            assert.equal(result, output);
        });

        it('has correct output', function() {
            paymentPackage.VAT = 0;
            let result = paymentPackage.toString();
            let output = `Package: Test\n- Value (excl. VAT): 1000\n- Value (VAT 0%): 1000`;

            assert.equal(result, output);
        });

        it('has correct output', function() {
            paymentPackage.value = 0;
            paymentPackage.VAT = 0;
            let result = paymentPackage.toString();
            let output = `Package: Test\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0`;

            assert.equal(result, output);
        });
    });
});