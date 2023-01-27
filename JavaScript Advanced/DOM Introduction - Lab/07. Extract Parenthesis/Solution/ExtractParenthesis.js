function extract(content) {
    let text = document.getElementById(`${content}`).textContent;
    let result = [];
    let pattern = /\((?<words>.+?)\)/gm;
    let match = pattern.exec(text);

    while (match != null) {
        result.push(match);
        match = pattern.exec(text);
    }
    return result.join('; ');
}