function solve() {
    let fNameField = document.getElementById('fname');
    let lNameField = document.getElementById('lname');
    let emailField = document.getElementById('email');
    let birthField = document.getElementById('birth');
    let positionField = document.getElementById('position');
    let salaryField = document.getElementById('salary');
    let hireBtn = document.getElementById('add-worker');
    let tableField = document.getElementById('tbody');
    let sumField = document.getElementById('sum');

    hireBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let info = {
            fName: fNameField.value,
            lName: lNameField.value,
            email: emailField.value,
            birth: birthField.value,
            position: positionField.value,
            salary: salaryField.value
        }
        if (validate(info)) {

            let tr = document.createElement('tr');
            tableField.appendChild(tr);

            for (let el of Object.keys(info)) {
                createData(info[el]);
            };

            function createData(message) {
                let td = document.createElement('td');
                td.innerText = message;
                tr.appendChild(td);
            };

            let td = document.createElement('td');
            tr.appendChild(td);

            let firedBtn = document.createElement('button');
            firedBtn.setAttribute('class', 'fired');
            td.appendChild(firedBtn);
            firedBtn.innerText = 'Fired';
            firedBtn.addEventListener('click', () => {
                tr.remove();

                let curentBudjet = Number(sumField.innerText);
                curentBudjet -= Number(info.salary);
                sumField.innerText = curentBudjet;
            });

            let editBtn = document.createElement('button');
            editBtn.setAttribute('class', 'edit');
            editBtn.innerText = 'Edit';
            td.appendChild(editBtn);
            editBtn.addEventListener('click', () => {
                fNameField.value = info.fName;
                lNameField.value = info.lName;
                emailField.value = info.email;
                birthField.value = info.birth;
                positionField.value = info.position;
                salaryField.value = info.salary;

                tr.remove();

                let curentBudjet = Number(sumField.innerText);
                curentBudjet -= Number(info.salary);
                sumField.innerText = curentBudjet;
            });

            fNameField.value = '';
            lNameField.value = '';
            emailField.value = '';
            birthField.value = '';
            positionField.value = '';
            salaryField.value = '';

            let curentBudjet = Number(sumField.innerText);
            sumField.innerText = (curentBudjet + Number(info.salary)).toFixed(2);
        };

        function validate(info) {

            for (let el of Object.keys(info)) {
                if (info[el] == '') {
                    return false;
                }
            };

            return true;
        };


    })
}
solve()