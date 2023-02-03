function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    //debugger;
    let newItem = document.createElement('li');
    newItem.textContent = newItemText;
    let parent = document.getElementById('items');
    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.innerText = '[Delete]';
    newItem.appendChild(deleteBtn);
    parent.appendChild(newItem);
    document.getElementById('newItemText').value = '';
    let wantToDelete = document.querySelectorAll('ul li a');

    for (let el of wantToDelete) {
        el.addEventListener('click', deleteItem);
    }

    function deleteItem(event) {
        event.target.parentElement.remove();
    }
}