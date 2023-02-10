function sortArray(array, orderType) {

    switch (orderType) {
        case 'asc':
            return array.sort((a, b) => a - b);
            break;
        case 'desc':
            return array.sort((a, b) => b - a);
            break;
    }
}

sortArray([14, 7, 17, 6, 8], 'asc')