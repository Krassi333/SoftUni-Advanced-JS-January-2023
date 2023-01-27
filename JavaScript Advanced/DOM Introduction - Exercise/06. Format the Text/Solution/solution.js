function solve() {
  let text = document.getElementById('input').value.split('.').filter(x => x.length > 0);
  let res = '';
  let count = 0;

  for (let el of text) {
    res += el + '.';
    count++;
    if (count == 3) {
      document.getElementById('output').innerHTML+=`<p>${res}</p>`;
      count = 0;
      res='';
    }
    debugger;
  }

  if (count != 0) {
    document.getElementById('output').innerHTML+=`<p>${res}</p>`;
  }

}