function magicMatrices(array) {
    let isMagig = true;

    let sumOfRow = (arr => {
        let sum = 0;
        for (let el of arr) {
            sum += el;
        };
        return sum;
    });

    let sum = sumOfRow(array[0]);


    for (let i = 0; i < array.length; i++) {
        if (sumOfRow(array[i]) !== sum) {
            isMagig = false;
            break;
        }
    }

    for (let j = 0; j < array[0].length; j++) {
        let column = [];
        for (let i = 0; i < array.length; i++) {
            column.push(array[i][j]);

        }
        if (sumOfRow(column) !== sum) {
            isMagig = false;
            break;
        }
    }
    console.log(isMagig ? 'true' : 'false');

}
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])