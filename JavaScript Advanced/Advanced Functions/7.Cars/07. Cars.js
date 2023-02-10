function cars(input) {
    let commands = {
        create,
        set,
        print
    };
    let carsList = {}
    for (let el of input) {
        el = el.split(' ');
        commands[el[0]](el);

    }
    function create(command) {
        if (command[2] == 'inherit') {
            carsList[command[1]] = {
                inherit: command[3]
            };
        } else {
            carsList[command[1]] = {};
        }
    }

    function set(command) {
        carsList[command[1]] = {
            ...carsList[command[1]],
            [command[2]]: command[3]
        }
    }

    function print2(command) {
        let properties = [];
        let inheritsProperty = [];
        for (let el in carsList[command[1]]) {
            if (el == 'inherit') {
                let inherit = carsList[command[1]].inherit;
                for (let property in carsList[inherit]) {
                    inheritsProperty.push(`${property}:${carsList[inherit][property]}`);
                }
            } else {
                properties.push(`${el}:${carsList[command[1]][el]}`);
            }
        }
        console.log(properties.join(',') + ',' + inheritsProperty.join(','));

    }

    function print(command) {
        for (let key in carsList) {
            for (let el in carsList[key]) {
                if (el == 'inherit') {
                    carsList[key].inherit = Object.assign({}, carsList[carsList[key].inherit]);
                }
            }
        }

        let properties = [];
        let inheritsProperty = [];
        for (let el in carsList[command[1]]) {
            if (el == 'inherit') {
                let inherit = carsList[command[1]].inherit;
                for (let property in inherit) {
                    if (property == 'inherit') {
                        for (let key in inherit.inherit) {
                            inheritsProperty.push(`${key}:${inherit[key]}`);
                        }

                    }else{
                        inheritsProperty.push(`${property}:${inherit[property]}`);

                    }

                }
            } else {
                properties.push(`${el}:${carsList[command[1]][el]}`);
            }
        }
        console.log(properties.join(',') + ',' + inheritsProperty.join(','));
    }
}

cars(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat'])