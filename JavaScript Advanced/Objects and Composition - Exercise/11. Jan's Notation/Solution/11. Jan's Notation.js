function jan_sNotation(array) {
    let numbers = {
        listOfNumbers: [],
        '+': function () {
            if (this.listOfNumbers.length >= 2) {
                let secondNumber = this.listOfNumbers.pop();
                let firstNumber = this.listOfNumbers.pop();
                this.listOfNumbers.push(firstNumber + secondNumber);
            } else {
                console.log('Error: not enough operands!');
                return 'error';
            }
        },
        '-': function () {
            if (this.listOfNumbers.length >= 2) {
                let secondNumber = this.listOfNumbers.pop();
                let firstNumber = this.listOfNumbers.pop();
                this.listOfNumbers.push(firstNumber - secondNumber);
            } else {
                console.log('Error: not enough operands!');
                return 'error';
            }
        },
        '*': function () {
            if (this.listOfNumbers.length >= 2) {
                let secondNumber = this.listOfNumbers.pop();
                let firstNumber = this.listOfNumbers.pop();
                this.listOfNumbers.push(firstNumber * secondNumber);
            } else {
                console.log('Error: not enough operands!');
                return 'error';
            }
        },
        '/': function () {
            if (this.listOfNumbers.length >= 2) {
                let secondNumber = this.listOfNumbers.pop();
                let firstNumber = this.listOfNumbers.pop();
                this.listOfNumbers.push(firstNumber / secondNumber);
            } else {
                console.log('Error: not enough operands!');
                return 'error';
            }
        },
    };

    for (let el of array) {

        if (typeof el == 'number') {
            numbers.listOfNumbers.push(el);
        } else {
            if (numbers[`${el}`]() == 'error') {
                return;
            } else {
                continue;
            }
        }
    }

    if (numbers.listOfNumbers.length == 1) {
        console.log(numbers.listOfNumbers[0]);
    } else {
        console.log('Error: too many operands!');
    }
}


jan_sNotation([3,

    4,

    '+'])