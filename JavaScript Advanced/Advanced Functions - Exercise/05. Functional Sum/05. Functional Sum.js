function add(sum) {
    function res(num) {
        sum += num;
        return res;
    };
    res.valueOf = function () {
        return sum;
    }

    return res;
}


console.log(Number(add(1)(6)(-3)));