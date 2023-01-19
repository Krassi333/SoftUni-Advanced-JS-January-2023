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

        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].plantName == plantName) {

                if (this.plants[i].ripe == false) {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
                };

                this.storage.push({
                    plantName: this.plants[i].plantName,
                    quantity: this.plants[i].quantity
                });
                this.spaceAvailable += this.plants[i].spaceRequired ;
                this.plants.splice(i, 1);
                return `The ${plantName} has been successfully harvested.`;
            };


        }
        throw new Error(`There is no ${plantName} in the garden.`);
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.`;
        let plantsInGarden = [];

        this.plants.forEach(element => {
            plantsInGarden.push(element.plantName);
        });

        plantsInGarden = plantsInGarden.sort((a, b) => a.localeCompare(b));
        result += `\nPlants in the garden: ${plantsInGarden.join(', ')}`;

        if (this.storage.length == 0) {
            result += '\nPlants in storage: The storage is empty.'
        } else {
            let plantsInStorage = [];

            this.storage.forEach(element => {
                plantsInStorage.push(`${element.plantName} (${element.quantity})`);
            });

            result += `\nPlants in storage: ${plantsInStorage.join(', ')}`;
        };

        return result;
    }
};

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

