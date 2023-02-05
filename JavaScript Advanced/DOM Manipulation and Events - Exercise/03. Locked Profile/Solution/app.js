function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    for (let el of buttons) {
        el.addEventListener('click', showInfo);
    }

    function showInfo(event) {
        let parent = event.target.parentElement;
        let isItLocked = false;

        if (parent.querySelector('input[value=lock]').checked) {
            isItLocked = true;
        }

        if (!isItLocked) {
            let childrenList = parent.children;
            childrenList[9].style.display = 'block';
            event.target.textContent = 'Hide it';
            event.target.removeEventListener('click', showInfo);
            event.target.addEventListener('click', hideInfo);
        }
    }

    function hideInfo(event) {
        let parent = event.target.parentElement;
        let isItLocked = false;

        if (parent.querySelector('input[value=lock]').checked) {
            isItLocked = true;
        }

        if (!isItLocked) {
            let childrenList = parent.children;
            childrenList[9].style.display = 'none';
            event.target.textContent = 'Show more';
            event.target.removeEventListener('click', hideInfo);
            event.target.addEventListener('click', showInfo);
        }
    }
}