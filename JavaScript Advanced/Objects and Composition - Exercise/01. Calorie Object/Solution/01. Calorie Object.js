function calorieObject(array) {
    let obj = {};

    for (let i = 0; i < array.length-1; i+=2) {
        obj[array[i]] = Number(array[i + 1]);
    }

    console.log(obj);
}

calorieObject(['Potato', '93', 'Skyr', '63',

'Cucumber', '18', 'Milk', '42'])