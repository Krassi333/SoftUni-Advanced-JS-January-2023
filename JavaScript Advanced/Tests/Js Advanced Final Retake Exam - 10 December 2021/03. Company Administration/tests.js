const { companyAdministration } = require('./companyAdministration');
const { expect } = require('chai');

describe("Testing the object companyAdministration", function () {
    describe("hiringEmployee ", function () {
        it("if the position is not Programmer", function () {
            expect(() => { companyAdministration.hiringEmployee('Name', 'Support', 5) }).to.throw(Error, 'We are not looking for workers for this position.');
        });

        it('when the years experiance are not enougth', () => {
            expect(companyAdministration.hiringEmployee('Name', 'Programmer', 2)).to.be.equal('Name is not approved for this position.');
        })

        it('when the years experiance are  enougth', () => {
            expect(companyAdministration.hiringEmployee('Name', 'Programmer', 4)).to.be.equal('Name was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Name', 'Programmer', 3)).to.be.equal('Name was successfully hired for the position Programmer.');

        })
    });

    describe('•	calculateSalary ', ()=>{
        it('invalid input',()=>{
            expect(()=> companyAdministration.calculateSalary(-5)).to.throw(Error, 'Invalid hours');
            expect(()=> companyAdministration.calculateSalary('5')).to.throw(Error, 'Invalid hours');
        });

        it('valid input', ()=>{
            expect(companyAdministration.calculateSalary(5)).to.be.equal(75);
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);

            expect(companyAdministration.calculateSalary(165)).to.be.equal(3475);
        })
    });

    describe('•	firedEmployee ',()=>{
        it('invalid input', ()=>{
            expect(()=>{companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '2')}).to.throw(Error, 'Invalid input')
            expect(()=>{companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)}).to.throw(Error, 'Invalid input')
            expect(()=>{companyAdministration.firedEmployee("Petar, Ivan, George", 1)}).to.throw(Error, 'Invalid input')
            expect(()=>{companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -2)}).to.throw(Error, 'Invalid input')

            
        });

        it('valid input', ()=>{
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.be.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.be.equal('Petar, George');

        })
    })

});
