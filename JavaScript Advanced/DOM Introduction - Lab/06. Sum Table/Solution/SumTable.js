function sumTable() {
    let table = Array.from(document.querySelectorAll('tr'));
    table = table.slice(1, table.length - 1);

    let sum = 0;
    for (let i = 0; i < table.length; i++) {
        sum += Number(table[i].lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = sum;
}