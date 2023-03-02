function sum(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += Number(num);
    }

    return sum;

}

console.log(sum([1,'a',3]));

module.exports={
   sum
}