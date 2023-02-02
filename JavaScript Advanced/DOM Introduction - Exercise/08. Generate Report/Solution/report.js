function generateReport() {
    let tableInfo = document.querySelectorAll('tbody tr');
    let tableData = [];

    for (let el of tableInfo) {
        let data = Array.from(el.childNodes);
        data = data.filter((x, i) => (i % 2 != 0));
        let workerInfo = {
            employee: data[0].textContent,
            deparment: data[1].textContent,
            status: data[2].textContent,
            dateHired: data[3].textContent,
            benefits: data[4].textContent,
            salary: data[5].textContent,
            rating: data[6].textContent,
        }
        tableData.push(workerInfo);
    }

    let colNames = document.querySelectorAll('thead tr th input');
    let neededCols = [];

    for (let el of colNames) {

        if (el.checked == true) {
            neededCols.push(el.name);
        }
    }

    let res = [];

    for (let workerInfo of tableData) {
        let obj = {};

        for (let el of neededCols) {
            if(workerInfo[el] != ""){
                obj[el] = workerInfo[el];
            }
            
        }

        res.push(obj);
    }

    document.getElementById('output').textContent = JSON.stringify(res);
}