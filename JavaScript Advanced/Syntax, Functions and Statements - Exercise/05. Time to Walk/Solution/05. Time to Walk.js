function timeToWalk(steps, lengthOfStep, speed) {
    let distance = steps * lengthOfStep;
    let breaks = Math.floor(distance / 500);
    speed /= 3.6;

    let time = distance / speed;
    let hour = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let sec = Math.round(time - minutes * 60);


    if (minutes + breaks >= 60) {
        hour++;
        minutes = (minutes + breaks) - 60;
    } else {
        minutes = minutes + breaks;
    }

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    sec = sec < 10 ? `0${sec}` : sec;

    console.log(`${hour}:${minutes}:${sec}`);

}
timeToWalk(8000, 0.6, 5)