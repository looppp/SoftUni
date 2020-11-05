const assert = require('chai').assert;
const StringBuilder = require('./StringBuilder');

describe('Test String Builder', function () {
    describe('Building', function () {
        it('should not throw with valid param', function () {
            assert.doesNotThrow(() => new StringBuilder());
            assert.doesNotThrow(() => new StringBuilder('test'));
        })

        it('should throw with invalid param', function () {
            assert.throw(() => new StringBuilder(1));
        })

        it('should check properties', function () {
            let sb = new StringBuilder();

            assert.isTrue(Object.getPrototypeOf(sb).hasOwnProperty('append'));
            assert.isTrue(Object.getPrototypeOf(sb).hasOwnProperty('prepend'));
            assert.isTrue(Object.getPrototypeOf(sb).hasOwnProperty('insertAt'));
            assert.isTrue(Object.getPrototypeOf(sb).hasOwnProperty('remove'));
            assert.isTrue(Object.getPrototypeOf(sb).hasOwnProperty('toString'));
        });
    });

    describe('Functionality', function () {
        let sb;

        beforeEach(() => {
            sb = new StringBuilder('test');
        });

        it('should return correct string', function () {
            assert.equal(sb.toString(), 'test');
        });

        it('should append correctly with valid string', function () {
            sb.append('ing');
            assert.equal(sb.toString(), 'testing');
        });

        it('should prepend correctly with valid string', function () {
            sb.prepend('hi,');
            assert.equal(sb.toString(), 'hi,test');
        });

        it('should insert correctly with valid string and index', function () {
            sb.insertAt('HERE', 2);
            assert.equal(sb.toString(), 'teHEREst');
        });

        it('should insert correctly with valid string and index', function () {
            sb.insertAt('HERE', 2);
            sb.remove(2, 4);
            assert.equal(sb.toString(), 'test');
        });

        it('should throws when appending non-string', function () {
            assert.throw(() => sb.append(5));
        });

        it('should throws when prepending non-string', function () {
            assert.throw(() => sb.prepend(5));
        });

        it('should throws when inserting non-string', function () {
            assert.throw(() => sb.insertAt(5, 0));
        });
    });
});