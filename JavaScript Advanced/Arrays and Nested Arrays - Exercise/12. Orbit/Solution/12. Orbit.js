function orbit(array) {
    let [width, height, x, y] = array.join(' ').split(' ');
    width = Number(width);
    height = Number(height);
    x = Number(x);
    y = Number(y);
    let space = [];

    for (let i = 0; i < width; i++) {
        let row = [];
        for (let j = 0; j < height; j++) {
            row.push(0);
        }
        space.push(row);
    }



    space[x][y] = 1;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            space[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    for (let i = 0; i < width; i++) {
        console.log(space[i].join(' '));
    }
}

orbit([5, 5, 2, 2])