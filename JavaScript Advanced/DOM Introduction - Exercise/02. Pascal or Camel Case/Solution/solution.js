function solve() {
  let text = document.getElementById('text').value.split(' ');
  let caseType = document.getElementById('naming-convention').value;
  let result = '';
  let word;

  switch (caseType) {
    case 'Camel Case':
      word = text[0];

      if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) { //Capital
        text[0] = word.toLowerCase();
      }

      for (let i = 1; i < text.length; i++) {
        word = text[i];

        if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) { //Not Capital
          let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
          text[i] = newWord;
        } else {
          text[i] = word[0] + word.slice(1).toLowerCase();
        }
      }

      result = text.join('');
      break;
    case 'Pascal Case':

      for (let i = 0; i < text.length; i++) {
        word = text[i];

        if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) { //Not Capital
          let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
          text[i] = newWord;
        } else {
          text[i] = word[0] + word.slice(1).toLowerCase();
        }
      }
      result = text.join('');
      break;
    default:
      result = 'Error!'
  }
  document.getElementById('result').innerText = result;

}