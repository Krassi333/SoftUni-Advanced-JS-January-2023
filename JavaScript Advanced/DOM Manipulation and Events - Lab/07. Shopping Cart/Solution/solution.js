function solve() {
   let addBtn = document.querySelectorAll('.add-product');
   let resultArea = document.getElementsByTagName('textarea');

   for (let el of addBtn) {
      el.addEventListener('click', addProduct);
   }

   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   let productsList = {};
   let productsAsArr = Array.from(document.getElementsByClassName('product-title'));
   let pricesAsArr = Array.from(document.getElementsByClassName('product-line-price'));
   let prices = {};

   for (let i = 0; i < productsAsArr.length; i++) {
      prices = {
         ...prices,
         [productsAsArr[i].textContent.toLowerCase()]: Number(pricesAsArr[i].textContent),
      }
   }

   function addProduct(event) {
      let parent = event.target.parentElement.parentElement;
      let allChilds = parent.children;

      let product = allChilds[1].children[0].innerText;
      console.log(product);
      resultArea[0].textContent += `Added ${product} for ${prices[product.toLowerCase()].toFixed(2)} to the cart.\n`;
      product = product.toLowerCase();

      if (productsList.hasOwnProperty(product)) {
         productsList[product]++;
      } else {
         productsList[product] = 1;
      }
   }

   function checkout(event) {
      let price = 0;
      let list = [];
      for (let el in productsList) {
         price += productsList[el] * prices[el];
         el = el[0].toUpperCase() + el.slice(1);
         list.push(el);
      }

      resultArea[0].textContent += `You bought ${list.join(', ')} for ${price.toFixed(2)}.`
   }
}