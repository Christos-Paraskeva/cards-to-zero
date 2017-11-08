export module TestHelper {
    export function cardNames() {
      return ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Skip Go', '+2', '+4', 'Choose Colour'];
    }

    export function colours() {
      return ['Red','Blue','Yellow','Green'];
    }

    export function formatArrayStructure(deck) {
      let formattedDeck = [];

      if (formattedDeck.length === 0) {
        for (let i = 0; i < deck.length; i++) {
          if (formattedDeck.length < 56) {
            formattedDeck.push( [deck[i].value, deck[i].name, deck[i].colour, deck[i].originalDeckPosition ]);
          }
        }
      }

      return formattedDeck;
    }
}

// let cardNames = function() {
//   return ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
// };
//
// let suits = function() {
//   return ['Hearts','Clubs','Spades','Diamonds'];
// };

// var formatArrayStructure = function(deck) {
//   var formattedDeck = [];
//
//   if (formattedDeck.length === 0) {
//     for (i = 0; i < deck.length; i++) {
//       if (formattedDeck.length < 52) {
//         formattedDeck.push( [deck[i].name, deck[i].suit, deck[i].value, deck[i].originalDeckPosition ]);
//       }
//     }
//   }
//
//   return formattedDeck;
// };
