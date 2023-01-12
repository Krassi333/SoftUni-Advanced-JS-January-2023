function carFactory(obj) {
    let res = {};
    res.model = obj.model;
    let power = obj.power;
    let volume = 0;

    if (power <= 90) {
        power = 90;
        volume = 1800;
    } else if (power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    res.engine = {
        power,
        volume
    }

    res.carriage = {
        type: obj.carriage,
        color: obj.color
    }

    let wheel = obj.wheelsize;

    if (wheel % 2 == 0) {
        wheel -= 1;
    }
    res.wheels = new Array(4).fill(wheel);
    return res;
}

carFactory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
})