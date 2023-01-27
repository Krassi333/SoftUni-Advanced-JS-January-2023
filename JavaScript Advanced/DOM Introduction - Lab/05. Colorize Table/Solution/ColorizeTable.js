function colorize() {
    let elements = document.getElementsByTagName('tr');
    for (let i = 1; i < elements.length; i += 2) {
        elements[i].style.backgroundColor = 'teal';
       
    }
}