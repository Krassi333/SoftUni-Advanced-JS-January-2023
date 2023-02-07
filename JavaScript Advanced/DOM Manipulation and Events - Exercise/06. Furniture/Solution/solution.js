function solve() {
  let generateBtn = document.querySelector('#exercise button');
  generateBtn.addEventListener('click', () => {
    let info = JSON.parse(document.querySelector('textarea').value);

    for (let el of info) {
      let image = el.img;
      let name = el.name;
      let price = el.price;
      let deFactor = el.decFactor;

      let tbody = document.getElementsByTagName('tbody');
      let tr = document.createElement('tr');
      tbody[0].appendChild(tr);

      let tdImg = document.createElement('td');
      tr.appendChild(tdImg);

      let img = document.createElement('img');
      img.src = image;
      tdImg.appendChild(img);

      let tdName = document.createElement('td');
      tr.appendChild(tdName);

      let firstP = document.createElement('p');
      firstP.innerText = name;
      tdName.appendChild(firstP);

      let tdPrice = document.createElement('td');
      tr.appendChild(tdPrice);

      let secondP = document.createElement('p');
      secondP.innerText = price;
      tdPrice.appendChild(secondP);

      let tdDeFactor = document.createElement('td');
      tr.appendChild(tdDeFactor);

      let thirdP = document.createElement('p');
      thirdP.innerText = deFactor;
      tdDeFactor.appendChild(thirdP);

      let tdCheckbox = document.createElement('td');
      tr.appendChild(tdCheckbox);

      let input = document.createElement('input');
      input.type = 'checkbox';
      tdCheckbox.appendChild(input);

    }
  });

  document.getElementsByTagName('button')[1].addEventListener('click', () => {
    let checkboxes = Array.from(document.getElementsByTagName('input'));
    let boudthFurnitures = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (let el of checkboxes) {

      if (el.checked == true) {
        let parentTr = el.parentElement.parentElement;
        let name = parentTr.children[1].children[0].innerText;
        boudthFurnitures.push(name);
        totalPrice += Number(parentTr.children[2].children[0].innerText);
        totalDecFactor += Number(parentTr.children[3].children[0].innerText);
      }
    };

    let result = `Bought furniture: ${boudthFurnitures.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDecFactor / boudthFurnitures.length}`;
    

    document.getElementsByTagName('textarea')[1].innerText=result;
  })
}