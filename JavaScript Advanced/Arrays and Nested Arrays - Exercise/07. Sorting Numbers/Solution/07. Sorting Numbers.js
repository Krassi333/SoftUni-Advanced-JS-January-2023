function sortingNumbers(array) {
    let arrayAscending = array.slice();
    arrayAscending = arrayAscending.sort((a, b) => a - b);


    let res = [];
    while (arrayAscending.length > 0) {
        res.push(arrayAscending.shift());
        res.push(arrayAscending.pop());
    }
    //console.log(res);
    return res;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])