function printEveryNthElementFromAnArray(array, n) {
    let res = [];

    for (let i = 0; i < array.length; i += n) {
        res.push(array[i]);
    }

    return res;
}
printEveryNthElementFromAnArray(['5',

    '20',

    '31',

    '4',

    '20'],

    2)