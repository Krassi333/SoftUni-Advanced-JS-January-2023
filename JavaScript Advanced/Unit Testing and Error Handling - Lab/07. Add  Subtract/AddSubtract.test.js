const { createCalculator } = require('./AddSubtract.js');
const { expect } = require('chai');

describe('Testing the function createCalculator', () => {

    it('Testing if the output is obj', () => {
        expect(typeof createCalculator()).to.be.equal('object', 'Error:the output is not a object');
    })

    it('Testing if the returned obj has property add', () => {
        expect(typeof createCalculator().add).to.be.equal('function', 'Error:the output has not property add');
    })

    it('Testing if the returned obj has property subtract', () => {
        expect(typeof createCalculator().subtract).to.be.equal('function', 'Error:the output has not property subtract');
    })
    it('Testing if the returned obj has property get', () => {
        expect(typeof createCalculator().get).to.be.equal('function', 'Error:the output has not property get');
    })

    it('test 1-Adding 3', () => {
        let func = createCalculator();
        func.add(3);
        expect(func.get()).to.be.equal(3, 'Error adding 3');
    });

    it('test 2-subtract 2', () => {
        let func = createCalculator();
        func.subtract(2);
        expect(func.get()).to.be.equal(-2, 'Error subtract 2');
    });

    it('test 1-Adding string "3"', () => {
        let func = createCalculator();
        func.add('3');
        expect(func.get()).to.be.equal(3, 'Error adding 3');
    });

    it('test 2-subtract string "2"', () => {
        let func = createCalculator();
        func.subtract('2');
        expect(func.get()).to.be.equal(-2, 'Error subtract 2');
    });

    it(`Testing if the internal sum can be modified`, () => {
        expect(createCalculator().value).to.equal(undefined);
    });
});