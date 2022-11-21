function daysInAmonth(day,year){
let date=new Date(Number(year),Number(day),0);
console.log(date.getDate());
}
daysInAmonth(2,2012)