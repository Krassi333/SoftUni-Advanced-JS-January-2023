function argumentInfo(...input) {
    let count = {};
    for (let el of input) {
        let type = typeof el;
        console.log(`${type}: ${el}`);
        if (count.hasOwnProperty(type)) {
            count[type] += 1;
        } else {
            count[type] = 1;
        }
    }

    let sorted=Object.entries(count).sort(([keyA,valA] , [keyB,valB]) => valB-valA);

    for (let [key,val] of sorted) {
        console.log(`${key} = ${val}`);
    }
}
argumentInfo({ name: 'bob'}, 3.333, 9.999);
