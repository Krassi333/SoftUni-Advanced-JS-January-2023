function roadRadar(speed, area) {

    let speedLimit = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            isInSpeedLimit(speed, speedLimit);
            break;
        case 'interstate':
            speedLimit = 90;
            isInSpeedLimit(speed, speedLimit);
            break;
        case 'city':
            speedLimit = 50;
            isInSpeedLimit(speed, speedLimit);
            break;
        case 'residential':
            speedLimit = 20;
            isInSpeedLimit(speed, speedLimit);
            break;
    }

    function isInSpeedLimit(speed, limit) {
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else {
            let status = '';
            let difference = Math.abs(limit - speed);
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
}

roadRadar(200, 'motorway')