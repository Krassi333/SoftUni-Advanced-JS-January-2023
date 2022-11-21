function mathOperations(firstNum, secondNum, operation) {
    let result = 0;

    switch (operation) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        case '**':
            result = firstNum ** secondNum;
            break;
    }

    console.log(result);
}
mathOperations(5,6,'**')