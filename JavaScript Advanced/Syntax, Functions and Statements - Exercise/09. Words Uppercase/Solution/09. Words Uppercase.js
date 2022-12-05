function wordsUppercase(string) {
    let pattern = /\w+/gm;
    let matches = string.match(pattern);
    matches= matches.map(x => x.toUpperCase());
    console.log(matches.join(', '));
}
wordsUppercase('Hi, how are you?')