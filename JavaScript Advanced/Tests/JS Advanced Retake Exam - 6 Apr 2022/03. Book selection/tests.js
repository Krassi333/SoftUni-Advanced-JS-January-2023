const { bookSelection } = require('./bookSelection');
const { expect } = require("chai");

describe("Testing the object bookSelection", function () {
    describe("isGenreSuitable property tests", function () {

        it("testing with restricted genre", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.be.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.be.equal('Books with Horror genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal('Books with Horror genre are not suitable for kids at 12 age');
        });

        it('testing with no restricted genre', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Comedy', 10)).to.be.equal('Those books are suitable');
        });
    });

    describe('isItAffordable property testing', () => {
        it('testing with valid inputs', () => {
            expect(bookSelection.isItAffordable(15, 10)).to.be.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(15, 20)).to.be.equal("Book bought. You have 5$ left");
            expect(bookSelection.isItAffordable(15, 15)).to.be.equal("Book bought. You have 0$ left");
        });

        it('testing with invalid type of inputs', () => {
            expect(() => bookSelection.isItAffordable('10', 20)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(10, '20')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable('10', '20')).to.throw(Error, 'Invalid input');

        });
    });

    describe('suitableTitles property testing', () => {
        it('testing with valid input', () => {
            expect(bookSelection.suitableTitles([{ title: 'Title1', genre: 'Horror' },
            { title: 'Result1', genre: 'comedy' },
            { title: 'Result2', genre: 'comedy' },
            { title: 'Title2', genre: 'Other' },
            { title: 'Result3', genre: 'comedy' }], 'comedy')).to.be.deep.equal(['Result1', 'Result2', 'Result3']);
        });

        it('testing with invalid type of inputs', () => {
            expect(() => bookSelection.suitableTitles([{ title: 'Title1', genre: 'Horror' },
            { title: 'Result1', genre: 'comedy' },
            { title: 'Result2', genre: 'comedy' },
            { title: 'Title2', genre: 'Other' },
            { title: 'Result3', genre: 'comedy' }], ['comedy'])).to.throw(Error, 'Invalid input');
        });

        it('testing with invalid type of inputs', () => {
            expect(() => bookSelection.suitableTitles(" title: 'Title1', genre: 'Horror' , { title: 'Result1', genre: 'comedy' }, { title: 'Result2', genre: 'comedy' }, { title: 'Title2', genre: 'Other' }, { title: 'Result3', genre: 'comedy' }", 'comedy')).to.throw(Error, 'Invalid input');
        });
    })

    // TODO: …
});
