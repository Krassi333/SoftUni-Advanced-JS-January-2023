function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let res = firstNumber - secondNumber;
    document.getElementById('result').innerText = res;
}