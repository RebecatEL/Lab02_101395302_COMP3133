var assert = require('assert');
var calculator = require('../app/calculator');

describe('Calculator', function() {
    describe('add', function() {
        it('add(5,2) should expected result 7 PASS', function() {
            assert.equal(calculator.add(5, 2), 7);
        });
        it('add(5,2) should expected result 8 FAIL', function() {
            assert.equal(calculator.add(5, 2), 8);
        });
        it('sub(5,2) should expected result 3 PASS', function() {
            assert.equal(calculator.sub(5, 2), 3);
        });
        it('sub(5,2) should expected result 5 FAIL', function() {
            assert.equal(calculator.sub(5, 2), 5);
        });
        it('mul(5,2) should expected result 10 PASS', function() {
            assert.equal(calculator.mul(5, 2), 10);
        });
        it('mul(5,2) should expected result 12 FAIL', function() {
            assert.equal(calculator.mul(5, 2), 12);
        });
        it('div(10,2) should expected result 5 PASS', function() {
            assert.equal(calculator.div(10, 2), 5);
        });
        it('div(10,2) should expected result 2 FAIL', function() {
            assert.equal(calculator.div(10, 2), 2);
        });
    });
})

