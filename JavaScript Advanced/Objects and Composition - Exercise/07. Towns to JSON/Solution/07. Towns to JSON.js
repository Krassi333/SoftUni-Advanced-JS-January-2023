function townsToJSON(input) {
    class CurrentTownInfo {
        constructor(name, latitude, longitude) {
            this["Town"] = name;
            this["Latitude"] = Number(latitude);
            this["Longitude"] = Number(longitude);
        }
    }
    input.shift();
    let res = [];
    for (let el of input) {
        let [name, latitude, longitude] = el.split(' | ');
        name = name.split('| ');
        name = name[1];    
        longitude = longitude.split(' |');
        longitude = Number(longitude[0]).toFixed(2);
        latitude = Number(latitude).toFixed(2);
        let obj = new CurrentTownInfo(name, latitude, longitude);
        res.push(obj);
    }

    console.log(JSON.stringify(res));
}

townsToJSON(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |'])