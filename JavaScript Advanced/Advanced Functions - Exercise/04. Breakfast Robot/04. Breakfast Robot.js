function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function (input) {
        input = input.split(' ');
        let commands = {
            restock,
            prepare,
            report
        }
        return commands[input[0]](input);

        function restock(input) {
            let microelement = input[1];
            let quantity = Number(input[2]);
            let currentQuantity = Number(ingredients[microelement]);
            ingredients[microelement] = currentQuantity + quantity;
            return 'Success';
        }

        function prepare(input) {
            let recipe = input[1];
            let quantity = Number(input[2]);
            let recipesBook = {
                apple: {
                    carbohydrate: 1,
                    flavour: 2
                },
                lemonade: {
                    carbohydrate: 10,
                    flavour: 20
                },
                burger: {
                    carbohydrate: 5,
                    fat: 7,
                    flavour: 3
                },
                eggs: {
                    protein: 5,
                    fat: 1,
                    flavour: 1
                },
                turkey: {
                    protein: 10,
                    carbohydrate: 10,
                    fat: 10,
                    flavour: 10
                }
            }

            let neededProducts = Object.entries(recipesBook[recipe]);

            for (let el of neededProducts) {
                if ((ingredients[el[0]] - (el[1] * quantity)) < 0) {
                    return `Error: not enough ${el[0]} in stock`;
                }
            }

            for (let el of neededProducts) {
                ingredients[el[0]] = ingredients[el[0]] - (el[1] * quantity);
            }
            return 'Success';

        }

        function report() {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }
}
let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));




