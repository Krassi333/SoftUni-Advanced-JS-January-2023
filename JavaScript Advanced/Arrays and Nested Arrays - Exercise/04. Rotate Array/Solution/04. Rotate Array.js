function rotateArray(array, num) {
    for (let i = 1; i <= num; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)