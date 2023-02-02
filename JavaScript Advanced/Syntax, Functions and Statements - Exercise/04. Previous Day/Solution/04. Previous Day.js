function previousDay(year, month, day) {
     let date = new Date(year, month, day - 1);
     if (day == 1) {
         date = new Date(year, month - 1, day - 1);
         console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
     } else {
         console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
     }
 
 }
previousDay(2016, 3, 1)