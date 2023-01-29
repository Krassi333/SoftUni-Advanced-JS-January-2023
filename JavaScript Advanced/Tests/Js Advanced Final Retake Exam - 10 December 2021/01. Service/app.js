window.addEventListener('load', solve);

function solve() {
    let sendBtn = document.querySelector('#right form button');
    let receivedSection = document.getElementById('received-orders');
    let completeSection = document.getElementById('completed-orders');
    let clearBtn = document.getElementsByClassName('clear-btn');

    sendBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let descriptionField = document.getElementById('description');
        let nameField = document.getElementById('client-name');
        let phoneField = document.getElementById('client-phone');

        let info = {
            description: descriptionField.value,
            name: nameField.value,
            phone: phoneField.value
        }

        if (validate(info)) {
            descriptionField.value = '';
            nameField.value = '';
            phoneField.value = '';

            let div = document.createElement('div');
            div.setAttribute('class', 'container');
            receivedSection.append(div);

            let h2 = document.createElement('h2');
            h2.innerText = `Product type for repair: ${document.getElementById('type-product').value}`;
            div.append(h2);

            let h3 = document.createElement('h3');
            h3.innerText = `Client information: ${info.name}, ${info.phone}`;
            div.append(h3);

            let h4 = document.createElement('h4');
            h4.innerText = `Description of the problem: ${info.description}`;
            div.append(h4);

            let startBtn = document.createElement('button');
            startBtn.innerText = 'Start repair';
            startBtn.setAttribute('class', 'start-btn');
            div.append(startBtn);
            startBtn.addEventListener('click', () => {
                startBtn.disabled = true;
                finishBtn.disabled = false;
            });

            let finishBtn = document.createElement('button');
            finishBtn.innerText = 'Finish repair';
            finishBtn.setAttribute('class', 'finish-btn');
            div.append(finishBtn);
            finishBtn.addEventListener('click', () => {
                div.remove();
                startBtn.remove();
                finishBtn.remove();

                completeSection.append(div);

            });
            finishBtn.disabled = true;

            clearBtn[0].addEventListener('click', () => {
                let orders = Array.from(document.querySelectorAll('#completed-orders .container'));
                orders.forEach(el => {
                    el.remove();
                })
            })

        }

        function validate(info) {
            if (info.description == '' || info.name == '' || info.phone == '') {
                return false;
            }

            return true;
        }
    })

}