function deleteByEmail() {
    let emailToDelite = document.querySelector('label input').value;
    debugger;
    let tableData = Array.from(document.querySelectorAll('tbody tr'));

    for (let el of tableData) {
        let email = Array.from(el.children);

        if (email[1].textContent == emailToDelite) {
            el.remove();
            document.getElementById('result').textContent='Deleted.';
        }else{
            document.getElementById('result').textContent='Not found.';
        }
    }
    document.querySelector('label input').value = '';
}