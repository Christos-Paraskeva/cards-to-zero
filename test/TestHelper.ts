import { iDeck } from '../src/models/Deck';


export module TestHelper {
    export function cardNames():Array<string> {
      return ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Skip Go', '+2', '+4', 'Choose Colour'];
    }

    export function colours():Array<string> {
      return ['Red','Blue','Yellow','Green'];
    }

    // need to use an interface here?
    // added "suppressImplicitAnyIndexErrors": true / instead to suppress error
    export function formatArrayStructure(deck:any):Array<object> {
      let formattedDeck = [];

      if (formattedDeck.length === 0) {
        for (let i = 0; i < deck.length; i++) {
          if (formattedDeck.length < 56) {
            formattedDeck.push( [deck[i].name, deck[i].colour, deck[i].originalDeckPosition ]);
          }
        }
      }

      return formattedDeck;
    }

    export function minimizedTestDeck():any {
      return [ Object({ name: 'Zero', colour: 'Red', originalDeckPosition: 1 }),
               Object({ name: 'One', colour: 'Red', originalDeckPosition: 2 }),
               Object({ name: 'Two', colour: 'Red', originalDeckPosition: 3 })
             ];
    }

    export function dealerTestDeck():any {
      return [ Object({ originalDeckPosition: 1 }),
               Object({ originalDeckPosition: 2 }),
               Object({ originalDeckPosition: 3 }),
               Object({ originalDeckPosition: 4 }),
               Object({ originalDeckPosition: 5 }),
               Object({ originalDeckPosition: 6 }),
               Object({ originalDeckPosition: 7 }),
               Object({ originalDeckPosition: 8 }),
               Object({ originalDeckPosition: 9 }),
               Object({ originalDeckPosition: 10 }),
               Object({ originalDeckPosition: 11 }),
               Object({ originalDeckPosition: 12 }),
               Object({ originalDeckPosition: 13 }),
               Object({ originalDeckPosition: 14 }),
               Object({ originalDeckPosition: 15 }),
               Object({ originalDeckPosition: 16 }),
               Object({ originalDeckPosition: 17 }),
               Object({ originalDeckPosition: 18 }),
               Object({ originalDeckPosition: 19 }),
               Object({ originalDeckPosition: 20 }),
               Object({ originalDeckPosition: 21 }),
               Object({ originalDeckPosition: 22 }),
               Object({ originalDeckPosition: 23 }),
               Object({ originalDeckPosition: 24 }),
               Object({ originalDeckPosition: 25 }),
               Object({ originalDeckPosition: 26 }),
               Object({ originalDeckPosition: 27 }),
               Object({ originalDeckPosition: 28 }),
               Object({ originalDeckPosition: 29 }),
               Object({ originalDeckPosition: 30 }),
               Object({ originalDeckPosition: 31 }),
               Object({ originalDeckPosition: 32 }),
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
