function editElement(element, match, replacement) {
    console.log(element);
    let text = element.innerText;
    let pattern = new RegExp(match, 'g');
    text = text.replace(pattern, replacement);
    element.innerText = text;
}
