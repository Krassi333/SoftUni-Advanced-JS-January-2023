function ticTacToe(array) {
    let dashboard = [[], [], []];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            dashboard[i][j] = false;
        }
    }
    let isTheTurnRepeated = false;
    for (let i = 0; i < array.length; i++) {

        let mark = giveMeMyMark(isTheTurnRepeated, i);
        let [row, col] = array[i].split(' ').map(Number);

        if (dashboard[row][col] == false) {
            dashboard[row][col] = mark;

            if (isWin(dashboard, mark)) {
                console.log(`Player ${mark} wins!`);

                for (let i = 0; i < 3; i++) {
                    console.log(dashboard[i].join('\t'));
                }
                return;
            };
        } else {
            console.log('This place is already taken. Please choose another!');
            isTheTurnRepeated = isTheTurnRepeated ? false : true;
            continue;
        }

        if (isThereFreeSpaceInDashboard(dashboard) == false) {
            console.log('The game ended! Nobody wins :(');

            for (let i = 0; i < 3; i++) {
                console.log(dashboard[i].join('\t'));
            }
            return;
        };
    }

    function giveMeMyMark(isTheTurnRepeated, i) {
        let mark = '';
        if (isTheTurnRepeated) {
            if (i % 2 !== 0) {
                mark = 'X';
            } else {
                mark = 'O';
            }
            isTheTurnRepeated = false;
        } else {
            if (i % 2 == 0) {
                mark = 'X';
            } else {
                mark = 'O';
            }
        }
        return mark;
    }

    function isThereFreeSpaceInDashboard(dashboard) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (dashboard[i][j] == false) {
                    return true;
                }
            }
        }

        return false;
    }
    function isWin(dashboard, mark) {
        for (let i = 0; i < 3; i++) {
            if (dashboard[i][0] == mark && dashboard[i][1] == mark && dashboard[i][2] == mark) {
                return true;
            } else if (dashboard[0][i] == mark && dashboard[1][i] == mark && dashboard[2][i] == mark) {
                return true;
            } else if (dashboard[0][0] == mark && dashboard[1][1] == mark && dashboard[2][2] == mark) {
                return true;
            } else if (dashboard[0][2] == mark && dashboard[1][1] == mark && dashboard[2][0] == mark) {
                return true;
            }

            return false;
        }

    }

}
ticTacToe(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 1",

"1 2",

"2 2",

"2 1",

"0 0"])