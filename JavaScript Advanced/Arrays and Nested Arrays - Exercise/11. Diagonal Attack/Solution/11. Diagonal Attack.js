function diagonalAttack(array) {
    let matrix = [];

    for (let el of array) {
        el = el.split(' ');
        matrix.push(el);
    }
    //console.table(matrix);
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][i] = Number(matrix[i][i]);
        matrix[matrix.length - 1 - i][i] = Number(matrix[matrix.length - 1 - i][i]);
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[matrix.length - 1 - i][i];
    }

    if (mainDiagonalSum == secondaryDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (typeof matrix[i][j] == 'string') {
                    matrix[i][j] = mainDiagonalSum;
                }
            }
            console.log(matrix[i].join(' '));
        }
    } else {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }


}

diagonalAttack(['1 1 1', '1 1 1', '1 1 0'])