function toggle() {
    let button=document.getElementsByClassName('button');
    if (button[0].textContent == 'More') {
        button[0].textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else {
        button[0].textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}