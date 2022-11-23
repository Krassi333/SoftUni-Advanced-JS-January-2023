function previousDay(year, month, day) {
    let date;
    if (day > 1) {
         date = new Date(year, month, day - 1);
    } else {
         date = new Date(year, month - 1, 0);
    }

    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}
previousDay(2016, 3, 1)