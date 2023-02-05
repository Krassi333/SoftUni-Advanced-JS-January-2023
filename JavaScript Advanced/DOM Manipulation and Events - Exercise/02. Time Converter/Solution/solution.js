function attachEventsListeners() {

    let buttons = document.querySelectorAll('input[type="button"]');

    for (let button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        let valueType = event.target.id;

        let parent = event.target.parentElement;
        console.log(parent);
        let value = Number(parent.querySelector('input[type=text]').value);
        console.log(value);
        switch (valueType) {
            case 'daysBtn':
                calc(value);
                break;
            case 'hoursBtn':
                value = value / 24;
                calc(value);
                break;
            case 'minutesBtn':
                value = value / 24 / 60;
                calc(value);
                break;
            case 'secondsBtn':
                value = value / 24 / 60 / 60;
                calc(value);
                break;
        }

        function calc(value) {
            let res = [];
            res[0] = value;
            res[1] = value * 24;
            res[2] = value * 24 * 60;
            res[3] = value * 24 * 60 * 60;
            let output = Array.from(document.querySelectorAll('input[type=text]'));
            for (let i = 0; i <= 3; i++) {
                output[i].value = res[i];
            }
        }
    }
}