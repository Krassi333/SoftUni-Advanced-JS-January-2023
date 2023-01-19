function solve() {
    let recipientField = document.getElementById('recipientName');
    let titleField = document.getElementById('title');
    let mesageField = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    let listOfMails = document.getElementById('list');

    resetBtn.addEventListener('click', () => {
        recipientField.value = '';
        titleField.value = '';
        mesageField.value = '';
    });

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let info = {
            recipient: recipientField.value,
            title: titleField.value,
            mesage: mesageField.value
        };

        if (validate(info)) {
            recipientField.value = '';
            titleField.value = '';
            mesageField.value = '';

            let li = document.createElement('li');
            listOfMails.appendChild(li);

            let firstTitle = document.createElement('h4');
            firstTitle.innerText = `Title: ${info.title}`;
            li.appendChild(firstTitle);

            let secondTitle = document.createElement('h4');
            secondTitle.innerText = `Recipient Name: ${info.recipient}`;
            li.appendChild(secondTitle);

            let span = document.createElement('span');
            span.innerText = info.mesage;
            li.appendChild(span);

            let div = document.createElement('div');
            div.setAttribute('id', 'list-action');
            li.appendChild(div);

            let sendBtn = document.createElement('button');
            sendBtn.setAttribute('id', 'send');
            sendBtn.type = 'submit';
            sendBtn.innerText = 'Send';
            div.appendChild(sendBtn);
            sendBtn.addEventListener('click', (event) => {
                event.preventDefault();

                //TO DO 
            });

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('id', 'delete');
            deleteBtn.type = 'submit';
            deleteBtn.innerText = 'Delete';
            div.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', (event) => {
                event.preventDefault();

                //TO DO

            });

        };

        function validate(info) {
            if (info.recipient == ''
                || info.title == ''
                || info.mesage == '') {
                return false;
            }

            return true;
        }
    });

}
solve()