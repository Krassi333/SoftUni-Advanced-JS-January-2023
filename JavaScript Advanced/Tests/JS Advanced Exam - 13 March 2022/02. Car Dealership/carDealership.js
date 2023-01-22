class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    };

    addCar(model, horsepower, price, mileage) {

        if (model == '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    };

    sellCar(model, desiredMileage) {
        for (let i = 0; i < this.availableCars.length; i++) {

            if (this.availableCars[i].model == model) {
                let soldPrice = 0;
                if (this.availableCars[i].mileage <= desiredMileage) {
                    soldPrice = this.availableCars[i].price;
                } else if (this.availableCars[i].mileage - desiredMileage <= 40.000) {
                    soldPrice = this.availableCars[i].price - this.availableCars[i].price * 0.05;
                } else if (this.availableCars[i].mileage - desiredMileage > 40.000) {
                    soldPrice = this.availableCars[i].price - this.availableCars[i].price * 0.10;
                };

                this.soldCars.push({
                    model,
                    horsepower: this.availableCars[i].horsepower,
                    soldPrice: soldPrice.toFixed(2)
                });

                this.totalIncome += soldPrice;
                this.availableCars.splice(i, 1);
                return `${model} was sold for ${soldPrice.toFixed(2)}$`;
            }
        };

        throw new Error(`${model} was not found!`);
    };

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        } else {
            let result = "-Available cars:";

            for (let el of this.availableCars) {
                result += `\n---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`
            };

            return result;
        }
    };

    salesReport(criteria) {
        let sorted = [];

        if (criteria == 'horsepower') {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria == 'model') {
            sorted = this.soldCars.sort((a, b) => {
                if (a.model < b.model) {
                    return -1;
                }
                if (a.model > b.model) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            });
        } else {
            throw new Error('Invalid criteria!');
        };


        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`;
        for (let el of this.soldCars) {
            result += `\n---${el.model} - ${el.horsepower} HP - ${el.soldPrice}$`;
        }


        return result;
    }
};

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);

console.log(dealership.salesReport('horsepower'));


