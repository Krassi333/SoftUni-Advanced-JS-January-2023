window.addEventListener('load', solve);

function solve() {
    let genreField = document.getElementById('genre');
    let nameField = document.getElementById('name');
    let authorField = document.getElementById('author');
    let dateField = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');

    let collectionField = document.getElementsByClassName('all-hits-container');
    let savedField = document.getElementsByClassName('saved-container');
    let likesField = document.querySelector('.likes p');

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let info = {
            genre: genreField.value,
            name: nameField.value,
            author: authorField.value,
            date: dateField.value
        }

        if (validate(info)) {
            let div = document.createElement('div');
            div.setAttribute('class', 'hits-info');
            collectionField[0].appendChild(div);

            let img = document.createElement('img');
            img.src = './static/img/img.png';
            div.appendChild(img);

            let firstTitle = document.createElement('h2');
            firstTitle.innerText = `Genre: ${info.genre}`;
            div.appendChild(firstTitle);

            let secondTitle = document.createElement('h2');
            secondTitle.innerText = `Name: ${info.name}`;
            div.appendChild(secondTitle);

            let thirdTitle = document.createElement('h2');
            thirdTitle.innerText = `Author: ${info.author}`;
            div.appendChild(thirdTitle);

            let fourthTitle = document.createElement('h3');
            fourthTitle.innerText = `Date: ${info.date}`;
            div.appendChild(fourthTitle);

            let saveBtn = document.createElement('button');
            saveBtn.setAttribute('class', 'save-btn');
            div.appendChild(saveBtn);
            saveBtn.innerText = 'Save song';
            saveBtn.addEventListener('click', () => {
                div.remove();
                saveBtn.remove();
                likeBtn.remove();

                savedField[0].appendChild(div);

            });

            let likeBtn = document.createElement('button');
            likeBtn.setAttribute('class', 'like-btn');
            likeBtn.textContent = 'Like song';
            div.appendChild(likeBtn);
            likeBtn.addEventListener('click', (event) => {
                let btn = event.target;
                btn.disabled = true;

                let likesMessage = likesField.innerText;
                currentLikes = likesMessage.split(':');
                currentLikes = Number(currentLikes[1]);
                likesField.innerText = `Total Likes: ${++currentLikes}`;
            });

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'delete-btn');
            deleteBtn.innerText = 'Delete';
            div.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => {
                div.remove();

            });

            genreField.value = '';
            nameField.value = '';
            authorField.value = '';
            dateField.value = '';
            dateField.value = '';

        }

        function validate(info) {

            if (info.genre == ''
                || info.name == ''
                || info.author == ''
                || info.date == '') {
                return false;
            };

            return true;
        }
    })
}