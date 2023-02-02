function solve() {
    document.querySelector('#selectMenuTo').innerHTML = '<option selected value="binary">Binary</option><option selected value="hexadecimal">Hexadecimal</option>';
    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        let num = Number(document.getElementById('input').value);
        let convertTo = document.getElementById('selectMenuTo').selectedOptions[0].value;
        let res = 0;

        switch (convertTo) {
            case 'binary':
                res = toBinary(num);
                break;
            case 'hexadecimal':
                res = toHexadecimal(num);
                break;
        }

        document.getElementById('result').value = res;

        function toBinary(num) {
            let res = '';

            while (num != 0) {
                let reminder = num % 2;
                res += reminder;
                num = Math.floor(num / 2);
            }

            res = res.split('');
            return res.reverse().join('');
        }

        function toHexadecimal(num) {
            let res = '';

            while (num != 0) {
                let reminder = num % 16;
                if (reminder >= 10) {
                    switch (reminder) {
                        case 10:
                            reminder = 'A';
                            break;
                        case 11:
                            reminder = 'B';
                            break;
                        case 12:
                            reminder = 'C';
                            break;
                        case 13:
                            reminder = 'D';
                            break;
                        case 14:
                            reminder = 'E';
                            break;
                        case 15:
                            reminder = 'F';
                            break;
                    }
                }

                res += reminder;
                num = Math.floor(num / 16);
            }

            res = res.split('');
            return res.reverse().join('');
        }
    }
}
