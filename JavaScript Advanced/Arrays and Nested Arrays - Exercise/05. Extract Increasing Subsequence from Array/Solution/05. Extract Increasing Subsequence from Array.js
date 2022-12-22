function extractIncreasingSubsequenceFromArray(array) {
    let currentBiggestNum = array[0];
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= currentBiggestNum) {
            currentBiggestNum = array[i];
            res.push(currentBiggestNum);
        }
    }

    return res;
}
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1])