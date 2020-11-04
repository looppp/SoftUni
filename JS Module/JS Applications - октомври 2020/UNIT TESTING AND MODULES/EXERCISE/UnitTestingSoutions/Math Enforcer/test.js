let {addFive} = require('./mathEnforcer');
let {subtractTen} = require('./mathEnforcer');
let {sum} = require('./mathEnforcer');
let {assert} = require('chai');


describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('shoud return undefined if input is not a number', () => {
            assert.equal(undefined, addFive('string'));
        });
        it('shoud return undefined if input is not a number', () => {
            assert.equal(undefined, addFive(undefined));
        });
        it('shoud return correct positive number', () => {
            assert.equal(10, addFive(5));
        });
        it('shoud return zero', () => {
            assert.equal(0, addFive(-5));
        });
    });
    describe('subtractTen', () => {
        it('shoud return undefined if input is not a number', () => {
            assert.equal(undefined, subtractTen('string'));
        });
        it('shoud return correct negative number', () => {
            assert.equal(-15, subtractTen(-5));
        });
        it('shoud return correct positive number', () => {
            assert.equal(45, subtractTen(55));
        });
        it('shoud return zero', () => {
            assert.equal(0, subtractTen(10));
        });
    });
    describe('sum', () => {
        it('shoud return undefined if first input is not a number', () => {
            assert.equal(undefined, sum('hello', 5));
        });
        it('shoud return undefined if second input is not a number', () => {
            assert.equal(undefined, sum(5, '5dawds'));
        });
        it('shoud return undefined if both inputs are not numbers', () => {
            assert.equal(undefined, sum('object', '5dawds'));
        });
        it('shoud return positive sum of two numbers', () => {
            assert.equal(10, sum(5, 5));
        });
        it('shoud return zero', () => {
            assert.equal(0, sum(0, 0));
        });
        it('shoud return negative number sum', () => {
            assert.equal(-20, sum(-20, 0));
        });
        it('shoud return zero by sum of negative and positive number', () => {
            assert.equal(0, sum(-5, 5));
        });
    });
});