function townPopulation(array) {
    let register = {};
    for (let el of array) {
        let [name, population] = el.split(' <-> ');
        if (register.hasOwnProperty(name)) {
            register[name] += Number(population);
        } else {
            register[name] = Number(population);
        }
    }
    for (let el in register) {
        console.log(`${el} : ${register[el]}`);
    }
}

townPopulation(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])