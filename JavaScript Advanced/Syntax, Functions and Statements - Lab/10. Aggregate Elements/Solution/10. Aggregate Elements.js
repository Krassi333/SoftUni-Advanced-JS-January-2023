function aggregateElements(array) {
    let sum = 0;
    let inverseSum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        inverseSum += (1 / array[i]);
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(array.join(''));
}

aggregateElements([1, 2, 3])