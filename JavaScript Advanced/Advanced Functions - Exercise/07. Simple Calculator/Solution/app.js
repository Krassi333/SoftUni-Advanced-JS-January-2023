function calculator() {
     let fields = {
        firstNum: null,
        secondNum: null,
        result: null
    }

    return {
        init,
        add,
        subtract
    }   

    function init(selector1, selector2, resultSelector) {
        fields.firstNum = document.querySelector(selector1);
        fields.secondNum = document.querySelector(selector2);
        fields.result = document.querySelector(resultSelector);
    }

    function add() {
        fields.result.value = Number(fields.firstNum.value) + Number(fields.secondNum.value);
    }

    function subtract() {
        fields.result.value = Number(fields.firstNum.value) - Number(fields.secondNum.value);
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


