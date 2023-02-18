function solve() {
    document.getElementById('add').addEventListener('click', create);

    function create(event) {
        event.preventDefault();
        let task = document.getElementById('task').value;
        document.getElementById('task').value = '';
        let description = document.getElementById('description').value;
        document.getElementById('description').value = '';
        let date = document.getElementById('date').value;
        document.getElementById('date').value = '';
        let [mainSect, openSection, progressSection, completeSection] = document.getElementsByTagName('section');

        let startBtn = createEl('button', 'Start', 'green');
        startBtn.addEventListener('click', moveToProgress);
        let deleteBtn = createEl('button', 'Delete', 'red');
        deleteBtn.addEventListener('click', deleteFunction);
        let finishBtn = createEl('button', 'Finish', 'orange');
        finishBtn.addEventListener('click', moveToComplete);

        if (task && description && date) {
            let article = document.createElement('article');
            let h3 = createEl('h3', task);
            //console.log(h3);
            article.appendChild(h3);
            article.appendChild(createEl('p', `Description: ${description}`));
            article.appendChild(createEl('p', `Due Date: ${date}`));
            let div = document.createElement('div');
            div.className = 'flex';
            div.appendChild(startBtn);
            div.appendChild(deleteBtn);
            article.appendChild(div);
            openSection.children[1].appendChild(article);
        }

        function moveToProgress(event) {
            let div = event.target.parentElement;
            div.removeChild(div.firstElementChild);
            div.appendChild(finishBtn);

            let article = div.parentElement;
            article.remove();
            progressSection.children[1].appendChild(article);
        }

        function moveToComplete(event) {
            let div = event.target.parentElement;
            let article = div.parentElement;
            div.remove();
            article.remove();
            completeSection.children[1].appendChild(article);
        }

        function deleteFunction(event) {
            let btn = event.target;
            btn.parentElement.parentElement.remove();
        }

    }

    function createEl(type, content, classType) {
        let el = document.createElement(type);
        el.textContent = content;
        el.className = classType;
        return el;
    }


}