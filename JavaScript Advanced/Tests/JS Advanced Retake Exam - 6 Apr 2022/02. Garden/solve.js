class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    };

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable - spaceRequired <= 0) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    };

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        for (let element of this.plants) {
            if (element.plantName == plantName) {
                if (element.ripe == true) {
                    throw new Error(`The ${plantName} is already ripe.`);
                }

                element.ripe = true;
                element.quantity += quantity;

                if (quantity == 1) {
                    return `${quantity} ${plantName} has successfully ripened.`;
                } else {
                    return `${quantity} ${plantName}s have successfully ripened.`
                }
            }
        };

        throw new Error(`There is no ${plantName} in the garden.`)
    };

    harvestPlant(plantName) {

        for (let el of this.plants) {
            if (el.plantName == plantName) {

                if (el.ripe == false) {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
                };

                this.storage.push({
                    plantName: el.plantName,
                    quantity: el.quantity
                });
                this.spaceAvailable -= el.spaceRequired;
                delete this.plants[el];
                return `The ${plantName} has been successfully harvested.`;
            };


        }
        throw new Error(`There is no ${plantName} in the garden.`);
    }
};

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('raspberry'));
