function create(words) {
   for (let word of words) {
      let div = document.createElement('div');
      div.addEventListener('click', display);
      let p = document.createElement('p');
      p.innerText = word;
      p.style.display = 'none';
      div.appendChild(p);
      document.getElementById('content').appendChild(div);
   }

   function display(event) {
      let currentP = event.target.children;
      currentP[0].style.display = 'block';
   }
}