function heroicInventory(array) {
    let res = [];
    for (let el of array) {
        el = el.split(' / ');
        let hero = {
            name: el[0],
            level: Number(el[1]),
            items: el[2] ? el[2].split(', ') : []
        };
       
        res.push(hero);
    }
    console.log(JSON.stringify(res));
}

heroicInventory([

    'Derek / 5 / ',

    'Hes / 1 / Desolator, Sentinel, Antara'])