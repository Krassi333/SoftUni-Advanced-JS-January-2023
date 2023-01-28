const { flowerShop } = require("./flowerShop");

const { expect } = require('chai');

describe("Testing the object flowerShop", function () {
    describe("•	calcPriceOfFlowers …", function () {
        it("invalid type of input", function () {
            expect(() => { flowerShop.calcPriceOfFlowers(['tulip'], 5, 15.2) }).to.throw(Error, 'Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('tulip', '5', 15.2) }).to.throw(Error, 'Invalid input!');

            expect(() => { flowerShop.calcPriceOfFlowers('tulip', 5, '15.2') }).to.throw(Error, 'Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(['tulip'], '5', '15.2') }).to.throw(Error, 'Invalid input!');

        });

        it('valid input', () => {
            expect(flowerShop.calcPriceOfFlowers('tulips', 5, 15)).to.be.equal('You need $75.00 to buy tulips!');

        })
    });

    describe('•	checkFlowersAvailable', () => {
        it('testing with flower in the list', () => {
            expect(flowerShop.checkFlowersAvailable('Orchid', ["Rose", "Lily", "Orchid"])).to.be.equal('The Orchid are available!');
        });

        it('testing with flower not in the list', () => {
            expect(flowerShop.checkFlowersAvailable('Tulips', ["Rose", "Lily", "Orchid"])).to.be.equal('The Tulips are sold! You need to purchase more!');

        })
    });

    describe('•	sellFlowers', () => {
        it('invalid input', () => {
            expect(() => flowerShop.sellFlowers('Rose, Lily', 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '2')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers('Rose, Lily', '2')).to.throw(Error, 'Invalid input!');

        });
        
        it('valid input', ()=>{
            expect( flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.be.equal('Rose / Lily');

        })
    })

});
