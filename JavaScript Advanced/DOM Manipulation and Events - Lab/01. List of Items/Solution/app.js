function addItem() {
    let newText = document.getElementById('newItemText').value;
    //debugger;
    let liElement = document.createElement('li');
    liElement.innerText = newText;
    let parent = document.querySelector('#items');
    parent.appendChild(liElement);
    document.getElementById('newItemText').value='';
}