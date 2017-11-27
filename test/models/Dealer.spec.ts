import { expect } from 'chai';
import * as sinon from "sinon";
import { Dealer } from '../../src/models/Dealer';
// import { ShuffleStructure } from '../../src/models/Shuffle';
import { Shuffle } from '../../src/models/Shuffle';

// export class PlayerDouble {
//     public id: number;
//     public name: string;
//     public cardsHeld: object[];
//
//     public constructor(id: number, name: string)
//     { this.id = id;
//       this.name = name;
//       this.cardsHeld = [];
//     }
// }
//
// let currentPlayersDouble:object[] = [];
//
// currentPlayersDouble.push(new PlayerDouble(1, 'Player1'),
//   new PlayerDouble(2, 'Player2'),
//   new PlayerDouble(3, 'Player3'),
//   new PlayerDouble(4, 'Player4')
// );
//
// class ShuffleDouble {
//   public correctShuffle: boolean;
//
//   public constructor()
//   { this.correctShuffle = false;
//
//   }
//
//   public defaultShuffle(deck:Array<any>):void {
//      deck.push('test');
//   }
// }


describe("Dealer", () => {
  let shuffle = new Shuffle();
  let dealer = new Dealer(shuffle);

  it("exists", () => {
    expect(dealer).not.to.be.undefined;
    expect(dealer).to.be.an.instanceof(Dealer);
  });

  describe("Is initialized with", () => {
    it("array for the current players", () => {
      console.log(dealer.currentPlayers);
      expect(dealer.currentPlayers).not.to.be.undefined;
    });

    it("an instance of 'Shuffle'", () => {
      console.log(dealer);
      expect(dealer.shuffle).to.be.an.instanceof(Shuffle);
    });
  //
  //   it("a colour", () => {
  //     expect(card.colour).to.equal('Red');
  //   });
  //
  //   it("an original deck position", () => {
  //     expect(card.originalDeckPosition).to.equal(1);
  //   });
  // });
});


// function PlayerDouble(id, name) {
//   this.id = id;
//   this.name = name;
//   this.cardsHeld = [];
// }
//
// var currentPlayersDouble = [];
//
// currentPlayersDouble.push(new PlayerDouble(1, 'Player1'),
//   new PlayerDouble(2, 'Player2'),
//   new PlayerDouble(3, 'Player3'),
//   new PlayerDouble(4, 'Player4'));
//
// function ShuffleDouble() {
// }
//
// ShuffleDouble.prototype = {
//   defaultShuffle: function (deck) {
//     deck.push('test');
//   },
// };
//
// var shuffleDouble = new ShuffleDouble();
//
// describe('Dealer', function() {
//   var dealer = new Dealer(shuffleDouble);
//
//   it("exists", function() {
//     expect(dealer).toBeDefined();
//   });
//
//   describe('is initialized with', function() {
//
//     it("an empty array for the current players", function() {
//       expect(dealer.currentPlayers).toBeDefined();
//     });
//
//     it("an instance of 'Shuffle'", function() {
//       expect(dealer.shuffle instanceof ShuffleDouble).toBe(true);
//     });
//   });
//
//   describe('when shuffling the cards', function() {
//
//     it("calls the shuffle class and gives it the cards", function() {
//       var shuffleDeckSpy = spyOn(dealer.shuffle, 'defaultShuffle').and.callThrough();
//       dealer.shuffleTheDeck(correctSequenceDeck());
//       expect(shuffleDeckSpy).toHaveBeenCalled();
//     });
//   });
//
//   describe('when dealing the cards', function() {
//
//     it("gives each player the correct amount of cards specified", function() {
//       dealer.dealTheCards(7, currentPlayersDouble, correctSequenceDeck());
//       expect(dealer.currentPlayers[0].cardsHeld.length).toEqual(7);
//       expect(dealer.currentPlayers[1].cardsHeld.length).toEqual(7);
//       expect(dealer.currentPlayers[2].cardsHeld.length).toEqual(7);
//       expect(dealer.currentPlayers[3].cardsHeld.length).toEqual(7);
//     });
//
//     describe("edge cases", function() {
//       it("throws an error when there are not enough cards to be dealt to the players", function() {
//         expect(dealer.dealTheCards.bind(null, 14, currentPlayersDouble, correctSequenceDeck())).toThrow(new Error("Cannot deal: not enough cards or players"));
//       });
//     });
//   });
});
