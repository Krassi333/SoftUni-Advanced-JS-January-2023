function listProcessor(input) {
    let collection = [];

    let processor = {
        add,
        remove,
        print: () => {
            return console.log(collection.join(','));
        }
    }

    function add(str) {
        collection.push(str);
    }

    function remove(str) {
        for (let el of collection) {
            if (el == str) {
                collection.splice(collection.indexOf(el), 1);
            }
        }
    }

    for (let el of input) {
        el = el.split(' ');
        if (el[0] == 'print') {
            processor.print();
        } else {
            processor[el[0]](el[1]);
        }
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])