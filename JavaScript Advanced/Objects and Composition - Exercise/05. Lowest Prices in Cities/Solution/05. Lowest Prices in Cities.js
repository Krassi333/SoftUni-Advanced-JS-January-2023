function lowestPricesInCities(input) {
    let productsList = {};

    for (let el of input) {
        let [townName, product, price] = el.split(' | ');
        price = Number(price);
        if (!productsList.hasOwnProperty(product)) {
            productsList[product] = {
                [townName]: price
            }
        } else {
            productsList[product][townName] = price;
        }
    }

    for (let el in productsList) {
        let productInfo = productsList[el];
        let sortedInfo = Object.entries(productInfo).sort(([keyA, valA], [keyB, valB]) => valA - valB);
        console.log(`${el} -> ${sortedInfo[0][1]} (${sortedInfo[0][0]})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 2',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])