function solve() {
  let text = document.getElementById('text').value;
  text = text.toLowerCase()
    .split(' ');

  let caseType = document.getElementById('naming-convention').value;
  let result = '';
  let word;

  switch (caseType) {
    case 'Camel Case': {
      result = text.shift();

      for (let el of text) {
        word = el[0].toUpperCase() + el.slice(1);
        result += word;
      }

      break;
    }
    case 'Pascal Case': {

      for (let el of text) {
        word = el[0].toUpperCase() + el.slice(1);
        result += word;
      }
      
      break;
    }
    default:
      result = 'Error!'
  }
  document.getElementById('result').innerText = result;

}