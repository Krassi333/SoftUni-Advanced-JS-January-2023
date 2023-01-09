function createAssemblyLine() {
    let result = {
        hasClima: (obj) => {
            return Object.assign(obj, {
                temp: 21,
                tempSettings: 21,
                adjustTemp: () => {
                    if (this.temp < this.tempSettings) {
                        this.temp += 1;
                    } else if (this.temp > this.tempSettings) {
                        this.temp -= 1;
                    }
                }
            })
        },
        hasAudio: (obj) => {
            return Object.assign(obj, {
                currentTrack: {
                    name: null,
                    artist: null
                },
                nowPlaying: function () {
                    if (this.currentTrack.name != null && this.currentTrack.artist !== undefined) {
                        console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                    }
                }
            });
        },
        hasParktronic: (obj) => {
            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }
    }

    return result;
}
const assemblyLine = createAssemblyLine();

const myCar = {

    make: 'Toyota',

    model: 'Avensis'

};

assemblyLine.hasClima(myCar);

console.log(myCar.temp);

myCar.tempSettings = 18;

myCar.adjustTemp();

console.log(myCar.temp);

assemblyLine.hasAudio(myCar);

myCar.currentTrack = {

    name: 'Never Gonna Give You Up',

    artist: 'Rick Astley'

};

myCar.nowPlaying();
console.log();
assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);
console.log(myCar);