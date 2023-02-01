const { library } = require('./library');
const { expect } = require('chai');

describe("Testing the object library", function () {
    describe("•	calcPriceOfBook ", function () {
        it("invalid inputs", function () {
          expect(()=>library.calcPriceOfBook(['Book Name'], 1980)).to.throw(Error,'Invalid input');
          expect(()=>library.calcPriceOfBook('Book Name', '1980')).to.throw(Error,'Invalid input');
          expect(()=>library.calcPriceOfBook(['Book Name'], '1980')).to.throw(Error,'Invalid input');
          expect(()=>library.calcPriceOfBook('Book Name', 10.5)).to.throw(Error,'Invalid input');
          expect(()=>library.calcPriceOfBook(true, 1980)).to.throw(Error,'Invalid input');
          expect(()=>library.calcPriceOfBook('Book Name', true)).to.throw(Error,'Invalid input');
      
        });

        it('valid input', () => {
            expect(library.calcPriceOfBook('Book Name', 1995)).to.be.equal('Price of Book Name is 20.00');
            expect(library.calcPriceOfBook('Book Name', 1980)).to.be.equal('Price of Book Name is 10.00');
            expect(library.calcPriceOfBook('Book Name', 1979)).to.be.equal('Price of Book Name is 10.00');
   
        })
    });

    describe('•	findBook ', () => {
        it('invalid input', () => {
            expect(() => library.findBook([], 'Troy')).to.throw(Error, 'No books currently available');
        });

        it('valid input', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.be.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Other')).to.be.equal('The book you are looking for is not here!');

        })
    });

    describe('•	arrangeTheBooks ', ()=>{
        it('invalid input', ()=>{
            expect(()=> library.arrangeTheBooks(-3)).to.throw(Error, 'Invalid input');
            expect(()=> library.arrangeTheBooks('3')).to.throw(Error, 'Invalid input');
            expect(()=> library.arrangeTheBooks(2.5)).to.throw(Error, 'Invalid input');

        })

        it('valid input',()=>{
            expect(library.arrangeTheBooks(30)).to.be.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(45)).to.be.equal('Insufficient space, more shelves need to be purchased.')


        })
    })
});
