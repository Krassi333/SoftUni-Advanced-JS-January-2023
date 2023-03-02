let { sum } = require('./04. Sum of Numbers');
const { expect } = require('chai');

describe('Testing the function sum', () => {
    it('Test if the input is arr', () => {
        expect(sum([1, 2, 3])).to.be.equal(6, 'error');
    })

    it('Test when the input is not arr', () => {
       expect(sum(['1','2','3'])).to.be.equal(6, 'error');
    })

    it('Test when the arr has el NaN', () => {
        expect(sum([1, 'a', 3])).to.be.NaN;
    })
}) 