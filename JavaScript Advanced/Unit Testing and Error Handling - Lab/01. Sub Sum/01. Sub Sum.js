function subSum(arr, startIndex, endIndex) {
    let sum = 0;

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    };

    if (Array.isArray(arr) == false) {
        return NaN;
    }

    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
