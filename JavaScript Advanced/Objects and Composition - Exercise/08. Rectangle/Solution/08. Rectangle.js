function rectangle(width, height, color) {

     if (color.charCodeAt(0) >= 97 && color.charCodeAt(0) <= 122) {
                let ch = color[0].toUpperCase();
                color=ch+color.slice(1);
            }

    return {
        width,
        height,
        color,
        calcArea: function (width, height) {
            return this.width * this.height;
        }
    }
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());