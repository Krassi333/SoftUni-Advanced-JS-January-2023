function getFibonator() {
    let fibonachiNums = [];

    function fibonachi() {
        let nextNum = 0;
        if (fibonachiNums.length - 2 >= 0) {
            nextNum = fibonachiNums[fibonachiNums.length - 1] + fibonachiNums[fibonachiNums.length - 2];
            fibonachiNums.push(nextNum);
        } else {
            nextNum = 1;
            fibonachiNums.push(nextNum);
        }
        return nextNum;
    }
    
    return fibonachi;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13