function areaAndVolumeCalculator(area, vol, input) {
    input = JSON.parse(input);
    let res = [];

    for (let el of input) {

        for (let variable of Object.keys(el)) {
            el[variable] = Number(el[variable]);
        }
        let obj = {
            area: area.apply(el),
            volume: vol.apply(el)
        }
        res.push(obj);
    }
    return res;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

let res = areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},    
    {"x":"7","y":"7","z":"10"},    
    {"x":"5","y":"2","z":"10"}    
    ]`);

console.log(res);

//[ { area: 2, volume: 20 }, { area: 49, volume: 490 }, { area: 10, volume: 100 } ]