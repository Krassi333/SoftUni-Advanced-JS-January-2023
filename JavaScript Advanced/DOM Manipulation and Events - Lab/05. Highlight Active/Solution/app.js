function focused() {
    let textEl=document.querySelectorAll('div input');
    
    for(let el of textEl){
        el.addEventListener('focus',onFocus);
        el.addEventListener('blur',onBlur);
    }

    function onFocus(event){
        event.target.parentElement.className='focused' ; 
    }

    function onBlur(event){
        event.target.parentElement.className='' ;
    }
}