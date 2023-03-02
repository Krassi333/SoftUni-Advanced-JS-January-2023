function printDeckOfCards(cards) {

    let res = [];

    for (let el of cards) {
        let face = el.slice(0, el.length - 1);
        let suit = el.slice(el.length - 1);

        try {
            res.push(createCard(face, suit));
        } catch (error) {
            console.log(`Invalid card: ${face}${suit}`);
        }

    }

    console.log(res.join(' '));


    function createCard(face, suit) {

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];

        if (validFaces.includes(face) && validSuits.includes(suit)) {
            switch (suit) {
                case 'S':
                    suit = '\u2660';
                    break;
                case 'H':
                    suit = '\u2665';
                    break;
                case 'D':
                    suit = '\u2666';
                    break;
                case 'C':
                    suit = '\u2663';
                    break;
            }

            return {
                face,
                suit,
                toString: () => {
                    return `${face}${suit}`;
                }
            }
        } else {
            throw new Error('Invalid face ot suit');

        }

    }

}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
//printDeckOfCards(['5S', '3D', 'QD', '1C']);