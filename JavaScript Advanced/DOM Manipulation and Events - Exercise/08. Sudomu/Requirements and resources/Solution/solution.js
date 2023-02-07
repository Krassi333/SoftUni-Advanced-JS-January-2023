function solve() {
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', check);
    buttons[1].addEventListener('click', clear);
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    function check() {

        let matrix = [];
        let numbersInSet = new Set();

        for (let row of rows) {
            let currentRow = [];
            let rowChildren = Array.from(row.children);

            for (let child of rowChildren) {
                let input = child.children[0].value;
                currentRow.push(input);
                numbersInSet.add(input);
            }

            matrix.push(currentRow);
        }

        let isSolved = true;

        if (numbersInSet.length != matrix.length * 2) {
            isSolved = false;
        } else {
            for (let i = 0; i < matrix.length; i++) {
                let row = matrix[i];
                let rowAsSet = new Set(row);

                if (row.length != rowAsSet.length) {
                    isSolved = false;
                    break;
                }
            }

            for (let j = 0; j < matrix.length; j++) {
                let col = [];

                for (let i = 0; i < matrix.length; i++) {
                    col.push(matrix[i][j]);
                }

                let colAsSet = new Set(col);

                if (col.length != colAsSet.length) {
                    isSolved = false;
                    break;
                }
            }
        }


        //let matchNumber = 0;

        //for (let i = 0; i < matrix.length; i++) {
        //    matrix[i] = matrix[i].map(Number);
        //    matchNumber += matrix[0][i];
        // }

        //for (let i = 1; i < matrix.length; i++) {  //проверява по редове
        //    let rowSum = 0;
        //
        //    for (let j = 0; j < matrix[i].length; j++) {
        //        rowSum += matrix[i][j];
        //    }
        //
        //    if (rowSum != matchNumber) {
        //        isSolved = false;
        //        break;
        //    }
        //}
        //if (isSolved) {
        //    for (let j = 0; j < matrix.length; j++) {  //проверява по колони
        //        let colSum = 0;
        //
        //         for (let i = 0; i < matrix.length; i++) {
        //             colSum += matrix[i][j];
        //       }
        //
        //        if (colSum != matchNumber) {
        //            isSolved = false;
        //            break;
        //        }
        //    }
        // }

        if (isSolved) {
            document.getElementsByTagName('table')[0].style.border = "2px solid green";
            document.querySelector('#check p').style.color = 'green';
            document.querySelector('#check p').textContent = 'You solve it! Congratulations!';

        } else {
            document.getElementsByTagName('table')[0].style.border = "2px solid red";
            document.querySelector('#check p').style.color = 'red';
            document.querySelector('#check p').textContent = 'NOP! You are not done yet...';
        }
    }

    function clear() {
        for (let row of rows) {
            let rowChildren = Array.from(row.children);

            for (let child of rowChildren) {
                child.children[0].value = '';

            }
        }

        document.getElementsByTagName('table')[0].style.border = 'none';
        document.querySelector('#check p').textContent = '';

    }

}