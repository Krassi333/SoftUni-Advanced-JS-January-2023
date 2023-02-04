function validate() {
    let inputEl=document.getElementById('email');
    inputEl.addEventListener('change',isTheEmailValid);
    
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;
    

    function isTheEmailValid() {
        let email = inputEl.value;
        if (email.match(pattern)) {
            inputEl.classList.remove('error');
           // inputEl.value='';
        } else {
            inputEl.classList.add('error');
        }
    }

}