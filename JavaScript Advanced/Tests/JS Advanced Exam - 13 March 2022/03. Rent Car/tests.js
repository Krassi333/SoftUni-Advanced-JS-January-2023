const { rentCar } = require('./rentCar');
const { expect } = require('chai');

describe("Tests for the functionality of the rentCar object", function () {
    describe("•	searchCar property testing", function () {
        it("Testing with invalid input", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], ['BMW'])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar("Volkswagen, BMW, Audi", 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar("Volkswagen, BMW, Audi", ['BMW'])).to.throw(Error, 'Invalid input!');

        });

        it('Testing with valid input', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.be.equal('There is 1 car of model BMW in the catalog!');
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'BMW')).to.be.equal('There is 2 car of model BMW in the catalog!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Toyota')).to.throw(Error, 'There are no such models in the catalog!');
        });
    });

    describe('•	calculatePriceOfCar ', () => {
        it('invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar('Toyota', '5')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(['Toyota'], 5)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(null, 5)).to.throw(Error, 'Invalid input!');
        });

        it('valid input', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 5)).to.be.equal('You choose Toyota and it will cost $200!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', 5)).to.be.equal('You choose Volkswagen and it will cost $100!');
            expect(() => rentCar.calculatePriceOfCar('Other', 5)).to.throw(Error, 'No such model in the catalog!');

        });
    });

    describe('•	checkBudget', ()=>{
        it('invalid input',()=>{
            expect(()=>{rentCar.checkBudget('40', 5, 200)}).to.throw(Error, 'Invalid input!');
            expect(()=>{rentCar.checkBudget(40, '5', 200)}).to.throw(Error, 'Invalid input!');
            expect(()=>{rentCar.checkBudget(40, 5, '200')}).to.throw(Error, 'Invalid input!');
            expect(()=>{rentCar.checkBudget('40', '5', '200')}).to.throw(Error, 'Invalid input!');
        });

        it('valid input', ()=>{
            expect(rentCar.checkBudget(40, 5, 200)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(20, 5, 200)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(40, 5, 100)).to.be.equal('You need a bigger budget!');

        })
    })
});
