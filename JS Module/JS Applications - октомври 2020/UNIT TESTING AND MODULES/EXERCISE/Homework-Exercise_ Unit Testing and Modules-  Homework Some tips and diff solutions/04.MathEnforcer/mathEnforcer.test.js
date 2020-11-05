const assert = require('chai').assert;
const mathEnforcer = require('./mathEnforcer');

describe('Test Math Enforcer', function () {
    describe('Undefined cases', function () {
        it('should return undefined for non-number', function () {
            assert.isUndefined(mathEnforcer.addFive('one'));
        });

        it('should return undefined for non-number', function () {
            assert.isUndefined(mathEnforcer.subtractTen('one'));
        });

        it('should return undefined for first non-number', function () {
            assert.isUndefined(mathEnforcer.sum('one', 5));
        });

        it('should return undefined for second non-number', function () {
            assert.isUndefined(mathEnforcer.sum(5, 'one'));
        });
    })

    describe('Valid cases', function () {
        describe('Add Five', function () {
            it('should return correct number with positive given number', function () {
                assert.equal(mathEnforcer.addFive(1), 6);
            });

            it('should return correct number with negative given number', function () {
                assert.equal(mathEnforcer.addFive(-1), 4);
            });

            it('should return correct number with floating given number', function () {
                assert.approximately(mathEnforcer.addFive(3.14), 8.14, 0.01);
            });

        });

        describe('Subtract Ten', function () {
            it('should subtract correctly with positive given number', function () {
                assert.equal(mathEnforcer.subtractTen(11), 1);
            });

            it('should subtract correctly with negative given number', function () {
                assert.equal(mathEnforcer.subtractTen(-11), -21);
            });

            it('should subtract correctly with floating given number', function () {
                assert.approximately(mathEnforcer.subtractTen(11.1), 1.1, 0.01);
            });

        });

        describe('Sum', function () {
            it('should return correct sum with positive numbers', function () {
                assert.equal(mathEnforcer.sum(1, 1), 2);
            });

            it('should return correct sum with negative numbers', function () {
                assert.equal(mathEnforcer.sum(-1, 1), 0);
            });

            it('should return correct sum with floating numbers', function () {
                assert.approximately(mathEnforcer.sum(3.14, 3.14), 6.28, 0.01);
            });

        });

    });
});