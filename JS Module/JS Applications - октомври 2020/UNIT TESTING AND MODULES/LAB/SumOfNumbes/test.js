const summ = require('./SumOfN').sum;
const assert = require('chai').assert;

describe('Calc Sum', function(){
    it('Shoud return positive number when adding two positive ones', () => {
         assert.equal(summ([1, 2]), 3);
    });

    it('Shoud return positive subtracted number when adding positive and negative numbers', () => {
        assert.equal(summ([-1, 2]), 1);
   });


});