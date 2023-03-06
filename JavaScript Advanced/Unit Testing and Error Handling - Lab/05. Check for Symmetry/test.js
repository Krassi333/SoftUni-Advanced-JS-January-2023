let { isSymmetric } = require('./05. Check for Symmetry');
let { expect } = require('chai');

describe('Testing the function isSymmetric', () => {
    it('Test 1', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('Test 2', () => {
        expect(isSymmetric(1)).to.be.false;
    });

    it('Test 3', ()=>{
        expect(isSymmetric([1,2,3])).to.be.false;
    });

    it('Test 4', ()=>{
        expect(isSymmetric('abba')).to.be.false;
    });

    it('Test 5', ()=>{
        expect(isSymmetric(['a','b','a'])).to.be.true;
    });

    it('Test 5', ()=>{
        expect(isSymmetric([1,2,'3'])).to.be.false;
    });
});