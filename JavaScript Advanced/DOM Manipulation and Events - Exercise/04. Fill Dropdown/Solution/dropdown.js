function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;
    let newEl = document.createElement('option');
    newEl.textContent = itemText;
    newEl.value = itemValue;
    document.getElementById('menu').appendChild(newEl);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}