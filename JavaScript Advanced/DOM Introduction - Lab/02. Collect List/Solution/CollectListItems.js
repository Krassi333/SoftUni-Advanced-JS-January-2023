function extractText() {
    let elements = document.getElementsByTagName('li');

    for (let el of elements) {
        let text = el.innerText;
        document.getElementById('result').value = document.getElementById('result').value + '\n' + text;
    }
}