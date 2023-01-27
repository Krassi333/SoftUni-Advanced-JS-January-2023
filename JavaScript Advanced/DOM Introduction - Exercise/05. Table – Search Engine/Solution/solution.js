function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchChars = document.getElementById('searchField').value;
      let tableINfo = document.querySelectorAll('tbody tr');

      for (let el of tableINfo) {
         el.classList.remove('select');
         let data = Array.from(el.childNodes);
         data = data.filter((x, i) => i % 2 != 0);

         for (let col of data) {
            if (col.textContent.includes(searchChars)) {
               el.className = 'select';
              break;
            }
         }
         
      }

      document.getElementById('searchField').value='';
   }
}