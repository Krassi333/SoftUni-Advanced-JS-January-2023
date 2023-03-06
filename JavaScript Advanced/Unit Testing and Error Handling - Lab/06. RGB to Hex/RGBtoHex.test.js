let {rgbToHexColor}=require('./RGBtoHex');
let {expect}=require('chai');

describe('Testing the function rgbToHexColor ', ()=>{
    it('Testing with white',()=>{
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    });

    it('Testing with black',()=>{
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
    });

    it('Testing with color',()=>{
        expect(rgbToHexColor(30, 144, 148)).to.be.equal('#1E9094');
    });

    it('Testing with out of upper range number',()=>{
        expect(rgbToHexColor(256, 255, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, 256, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, 255, 256)).to.be.equal(undefined);

    });

    it('Testing with out of bottem range number',()=>{
        expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, -1)).to.be.equal(undefined);

    });

    it('Testing with invalid input',()=>{
        expect(rgbToHexColor('a', 255, 255)).to.be.equal(undefined);
    });

    it('Testing with invalid input',()=>{
        expect(rgbToHexColor('255', 255, 255)).to.be.equal(undefined);
    });

    it('Testing with missing input',()=>{
        expect(rgbToHexColor(1, 1)).to.be.equal(undefined);
        expect(rgbToHexColor(1)).to.be.equal(undefined);
        expect(rgbToHexColor()).to.be.equal(undefined);
    });


});