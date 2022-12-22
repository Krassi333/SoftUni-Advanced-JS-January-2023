function addAndRemoveElements(array) {
    let number = 0;
    let res = [];
    for (let el of array) {
        number++;
        switch (el) {
            case 'add':
                res.push(number);
                break;
            case 'remove':
                res.pop();
                break;
        }
    }

    if (res.length != 0) {
        console.log(res.join(`\n`));
    } else {
        console.log('Empty');
    }

}

addAndRemoveElements(['remove', 'remove', 'remove'])