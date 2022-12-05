function validityChecker(x1, y1, x2, y2) {
   
    distanceBetweenTwoPoints(x1, y1, 0, 0);
    distanceBetweenTwoPoints(x2, y2, 0, 0);
    distanceBetweenTwoPoints(x1, y1, x2, y2);

    function distanceBetweenTwoPoints(x1, y1, x2, y2) {
        let res = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toString();
        if (res.includes('.')){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`); 
        }        
    }
}
validityChecker(2, 1, 1, 1)