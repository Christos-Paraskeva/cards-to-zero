export module TestHelper {
    export function cardNames():Array<string> {
      return ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Skip Go', '+2', '+4', 'Choose Colour'];
    }

    export function colours():Array<string> {
      return ['Red','Blue','Yellow','Green'];
    }

    // need to use an interface here?
    // added "suppressImplicitAnyIndexErrors": true / instead to suppress error
    export function formatArrayStructure(deck:Array<any>):Array<object> {
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

    export function minimizedTestDeck():Array<object> {
      return [ Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }),
               Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }),
               Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 })
             ];
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
