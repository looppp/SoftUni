function deckOfCards(cards){
    function makeCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];
        let suitsSymbols = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
    
        if(!validFaces.includes(face)){
            return `Invalid card: ${face}${suit}`;
        }
        if(!validSuits.includes(suit)){
            return `Invalid card: ${face}${suit}`;
        }
        let card = face + suitsSymbols[suit];
    
        return card;
    }
    
    let result = [];

    cards.forEach(card => {
        let suit = card.substr(-1);
        let face = card.substring(0, card.length - 1);

        if(makeCard(face, suit).length > 3){
           console.log(makeCard(face, suit));
        } else {
            result.push(makeCard(face, suit));
        }
    });

    if(result.length === cards.length){
        console.log(result);
    }

}
deckOfCards(['AS', '10D', 'KH', '2C']);