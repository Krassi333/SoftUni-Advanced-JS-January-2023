function stringLength(firstString, secondString, thirdString) {
    let allLength = firstString.length + secondString.length + thirdString.length;
    console.log(allLength);
    console.log(Math.floor(allLength / 3));
}

stringLength('chocolate', 'ice cream', 'cake')