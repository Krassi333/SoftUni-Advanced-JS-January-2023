function solve() {

    let containerBtn = document.querySelector('#container button');
    containerBtn.addEventListener('click', createRecord);
    let archiveBtn = document.querySelector('#archive button');
    archiveBtn.addEventListener('click', clearAll);

    function createRecord(event) {
        event.preventDefault();

        let inputs = document.getElementById('container').children;
        let name = inputs[0].value;
        let hall = inputs[1].value;
        let price = inputs[2].value;
        console.log(Number(price));

        if (name && hall && price && !isNaN(price)) {

            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';

            let li = document.createElement('li');
            li.appendChild(createEl('span', name));
            li.appendChild(createEl('strong', `Hall: ${hall}`));

            let div = document.createElement('div');
            div.appendChild(createEl('strong', `${Number(price).toFixed(2)}`));
            let inputEl = createEl('input');
            inputEl.placeholder = 'Thickets Sold';
            div.appendChild(inputEl);
            let archiveBtn = createEl('button', 'Archive');
            archiveBtn.addEventListener('click', moveToArchive);
            div.appendChild(archiveBtn);

            function moveToArchive(event) {
                event.preventDefault();
                let parentDiv = event.target.parentElement;
                let parentChilds = parentDiv.children;
                let input = Number(parentChilds[1].value);

                if (!isNaN(input) && input != '') {
                    let li = document.createElement('li');
                    li.appendChild(createEl('span', name));
                    li.appendChild(createEl('strong', `Total amount: ${(input * Number(price)).toFixed(2)}`));
                    let deleteBtn = createEl('button', 'Delete');
                    deleteBtn.addEventListener('click', deleteFunction);
                    li.appendChild(deleteBtn);

                    document.querySelector('#archive ul').appendChild(li);

                    let elToRemove = event.target.parentElement.parentElement;
                    elToRemove.remove();

                }
            }

            li.appendChild(div);
            document.querySelector('#movies ul').appendChild(li);

            function createEl(type, content, classType) {
                let el = document.createElement(type);
                el.textContent = content;
                el.className = classType;
                return el;
            }
        }




        function deleteFunction(event) {
            event.preventDefault();
            event.target.parentElement.remove();
        }
    }

    function clearAll(event) {
        event.preventDefault();
        let parent = document.querySelector('#archive ul');
        let childrenCollection = Array.from(parent.children);
        //console.log(ch);
        for (let el of childrenCollection) {
            el.remove();
        }
    }
}    