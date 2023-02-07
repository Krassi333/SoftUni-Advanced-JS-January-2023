function encodeAndDecodeMessages() {
    let textFields = document.getElementsByTagName('textarea');
    let buttons = document.getElementsByTagName('button');
    buttons[0].addEventListener('click', encodeMessige);
    buttons[1].addEventListener('click', decodeMessige);

    function encodeMessige() {
        let text = textFields[0].value;
        let decodedText = '';

        for (let i = 0; i < text.length; i++) {
            decodedText += String.fromCharCode(text.charCodeAt(i) + 1);
        }

        textFields[1].value = decodedText;
        textFields[0].value = '';
    }

    function decodeMessige() {
        let text = textFields[1].value;
        let undecodedText = '';

        for (let i = 0; i < text.length; i++) {
            undecodedText += String.fromCharCode(text.charCodeAt(i) - 1);
        }
        textFields[1].value = undecodedText;
        
    }

}