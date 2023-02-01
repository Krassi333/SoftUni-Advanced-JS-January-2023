class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    };

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.';
        };

        for (let el of this.listOfParticipants) {
            if (el.name == name) {
                return `The ${name} is already registered at the camp.`
            }
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`

    };

    unregisterParticipant(name) {

        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name == name) {
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully.`
            }
        }

        throw new Error(`The ${name} is not registered in the camp.`);

    };

    timeToPlay(typeOfGame, participant1, participant2) {

        let firstPlayer;
        let secondPlayer;

        this.listOfParticipants.forEach(element => {
            if (element.name == participant1) {
                firstPlayer = element;
            } else if (element.name == participant2) {
                secondPlayer = element;
            }
        });

        if (typeOfGame == 'WaterBalloonFights') {

            if (firstPlayer == undefined || secondPlayer == undefined) {
                throw new Error('Invalid entered name/s.');
            }

            if (firstPlayer.condition != secondPlayer.condition) {
                throw new Error('Choose players with equal condition.');
            }

            let winner = '';

            if (firstPlayer.power > secondPlayer.power) {
                winner = participant1;
            } else if (firstPlayer.power < secondPlayer.power) {
                winner = participant2;
            } else {
                return `There is no winner.`
            }

            for (let element of this.listOfParticipants) {
                if (element.name == winner) {
                    element.wins++;
                    return `The ${winner} is winner in the game ${typeOfGame}.`
                }
            }

        } else {
            if (firstPlayer == undefined) {
                throw new Error('Invalid entered name/s.');
            }

            for (let element of this.listOfParticipants) {
                if (element.name == participant1) {
                    element.power += 20;
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`
                }
            }
        }
    };

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;

        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for (let el of sorted) {
            result += `\n${el.name} - ${el.condition} - ${el.power} - ${el.wins}`
        }

        return result;
    }
};

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

