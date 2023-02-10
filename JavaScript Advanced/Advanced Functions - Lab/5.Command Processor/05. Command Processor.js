function solution() {
    let string = '';
    return ({
        append,
        removeStart,
        removeEnd,
        print: () => {
            return console.log(string);
        }
    })

    function append(str) {
        string += str;
    }                                     //hel loa gain

    function removeStart(n) {
        string = string.slice(n);
    }

    function removeEnd(n) {
        string = string.slice(0,-n);

    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();