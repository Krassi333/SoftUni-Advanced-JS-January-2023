function search() {
   let towns = Array.from(document.getElementsByTagName('li'));
   let searchText = document.getElementById('searchText').value;
   let count = 0;

   for (let el of towns) {
      
      if (el.innerText.includes(searchText)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         count++;
      } else {
         el.style.textDecoration = 'none';
         el.style.fontWeight = 'normal';
      }
   }

   document.getElementById('result').innerText = `${count} matches found`;
  
}
