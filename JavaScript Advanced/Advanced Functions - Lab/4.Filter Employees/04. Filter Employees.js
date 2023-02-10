function filterEmployees(data, criteria) {
    data = JSON.parse(data);
    criteria = criteria.split('-');
    let count = 0;
    let res = [];

    for (let el of data) {
        if (isTrueByCriteria(el, criteria)) {
            res.push(el);
        }
    }

    for (let el of res) {
        print(el);
    }

    function isTrueByCriteria(obj, criteria) {
        switch (criteria[0]) {
            case 'all':
                return true;
                break;
            default:
                if (obj.hasOwnProperty(criteria[0]) && obj[criteria[0]] == criteria[1]) {
                    return true;
                } else {
                    return false;
                }

        }
    }

    function print(obj) {
        console.log(`${count}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
        count++;
    }
}

filterEmployees(`[{"id": "1", "first_name": "Kaylee", "last_name": "Johnson", "email": "k0@cnn.com", "gender": "Female"}, 
    {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" },
    { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" },
    { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`,
    'last_name-Johnson')