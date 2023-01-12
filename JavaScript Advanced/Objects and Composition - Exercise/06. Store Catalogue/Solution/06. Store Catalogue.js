function storeCatalogue(input) {
    let products = {};

    for (let line of input) {
        let [name, price] = line.split(' : ');
        products[name] = price;
    }

    let sorted = Object.entries(products).sort(([keyA, valA], [keyB, valB]) => keyA.localeCompare(keyB));
    let productsByLetter = {};

    for (let el of sorted) {
        let product = el[0];
        let price = el[1];
        let firstLetter = product[0];
        if (!productsByLetter.hasOwnProperty(firstLetter)) {
            productsByLetter[firstLetter] = [`${product}: ${price}`];
        } else {
            productsByLetter[firstLetter].push(`${product}: ${price}`);
        }
    }

    for (let letter in productsByLetter) {
        console.log(letter);
        for (let el of productsByLetter[letter]) {
            console.log(`  ${el}`);
        }
    }
}
storeCatalogue(['Banana : 2','Rubic Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10'])