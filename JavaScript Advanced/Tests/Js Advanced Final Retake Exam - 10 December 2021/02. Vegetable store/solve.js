class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.productList = new Set();
    };

    loadingVegetables(vegetables) {
        let currentList = new Set();

        vegetables.forEach(element => {

            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            currentList.add(type);

            if (this.productList.has(type)) {
                this.availableProducts.forEach(el => {
                    if (el.type == type) {
                        el.quantity += quantity;

                        if (el.price < price) {
                            el.price = price;
                        }
                    }
                })
            } else {
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                });
                this.productList.add(type);
            }
        });

        currentList = Array.from(currentList);
        return `Successfully added ${currentList.join(', ')}`
    };

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach(el => {
            let [type, quantity] = el.split(' ');
            quantity = Number(quantity);

            if (this.productList.has(type)) {

                for (let product of this.availableProducts) {

                    if (product.type == type) {

                        if (product.quantity < quantity) {
                            throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                        }

                        totalPrice += quantity * product.price;
                        product.quantity -= quantity;
                    }

                }
            } else {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
        })

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    };

    rottingVegetable(type, quantity) {

        if (!this.productList.has(type)) {
            throw new Error(`${type} is not available in the store.`);
        }

        for (let el of this.availableProducts) {

            if (el.type == type) {

                if (el.quantity <= quantity) {
                    el.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`
                } else {
                    el.quantity -= quantity;
                    return `Some quantity of the ${type} has been removed.`
                }
            }
        }
    };

    revision() {
        let result = "Available vegetables:";

        let productInfo = this.availableProducts.sort((a, b) => a.price - b.price);

        productInfo.forEach(el => {
            result += `\n${el.type}-${el.quantity}-$${el.price}`;
        });

        result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return result;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



