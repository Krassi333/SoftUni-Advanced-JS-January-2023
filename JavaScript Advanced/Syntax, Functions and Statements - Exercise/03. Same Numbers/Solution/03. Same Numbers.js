function sameNumbers(num) {
    num = num.toString();
    let isEqual = true;
    let firstNum = Number(num[0]);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] != firstNum && isEqual) {
            isEqual = false;
        }
        sum += Number(num[i]);
    }

    console.log(isEqual);
    console.log(sum);
}
sameNumbers(1234)