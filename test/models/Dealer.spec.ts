import * as chai from 'chai';
import * as sinon from "sinon";
import * as sinonChai from 'sinon-chai';
import { Dealer } from '../../src/models/Dealer';
import { Shuffle } from '../../src/models/Shuffle';
import { Card } from '../../src/models/Card';
import { iPlayer } from '../../src/models/Player';

import { TestHelper } from '../TestHelper';

chai.use(sinonChai);
const expect = chai.expect;

export class PlayerDouble {
    public id: number;
    public name: string;
    public cardsHeld: Card[];

    public constructor(id: number, name: string)
    { this.id = id;
      this.name = name;
      this.cardsHeld = [];
    }
}

let currentPlayersDouble:iPlayer[] = [];

currentPlayersDouble.push(new PlayerDouble(1, 'Player1'),
  new PlayerDouble(2, 'Player2'),
  new PlayerDouble(3, 'Player3'),
  new PlayerDouble(4, 'Player4')
);


describe("Dealer", () => {
  let shuffle = new Shuffle();
  let dealer = new Dealer(shuffle);

  it("exists", () => {
    expect(dealer).not.to.be.undefined;
    expect(dealer).to.be.an.instanceof(Dealer);
  });

  describe("Is initialized with", () => {
    it("array for the current players", () => {
      expect(dealer.currentPlayers).not.to.be.undefined;
    });

    it("an instance of 'Shuffle'", () => {
      expect(dealer.shuffle).to.be.an.instanceof(Shuffle);
    });
  });

  describe("When shuffling the cards", () => {
    it("calls the shuffle class and gives it the cards", () => {
      const shuffleDeckSpy = sinon.spy(dealer.shuffle, "defaultShuffle");
      dealer.shuffleTheDeck(TestHelper.minimizedTestDeck());
      expect(shuffleDeckSpy).to.have.been.called;
    });
  });

  describe("When dealing the cards", () => {
    it("gives each player the correct amount of cards specified", () => {
      dealer.dealTheCards(7, currentPlayersDouble, TestHelper.dealerTestDeck());
      expect(dealer.currentPlayers[0].cardsHeld.length).to.equal(7);
      expect(dealer.currentPlayers[1].cardsHeld.length).to.equal(7);
      expect(dealer.currentPlayers[2].cardsHeld.length).to.equal(7);
      expect(dealer.currentPlayers[3].cardsHeld.length).to.equal(7);
      });
    });

  describe("Edge cases", () => {
    it("throws an error when there are not enough cards to be dealt to the players", () => {
      expect(function () { dealer.dealTheCards(14, currentPlayersDouble, TestHelper.dealerTestDeck()) }).to.throw("Cannot deal: not enough cards or players");
    });
  });
});

//   describe('when dealing the cards', function() {
//
//     it("gives each player the correct amount of cards specified", function() {
//       dealer.dealTheCards(7, currentPlayersDouble, correctSequenceDeck());
//       expect(dealer.currentPlayers[0].cardsHeld.length).toEqual(7);
//       expect(dealer.currentPlayers[1].cardsHeld.length).toEqual(7);
//       expect(dealer.currentPlayers[2].cardsHeld.length).toEqual(7);
//       expect(dealer.currentPlayers[3].cardsHeld.length).toEqual(7);
//     });

// describe('when shuffling the cards', function() {
//
//     it("calls the shuffle class and gives it the cards", function() {
//       var shuffleDeckSpy = spyOn(dealer.shuffle, 'defaultShuffle').and.callThrough();
//       dealer.shuffleTheDeck(correctSequenceDeck());
//       expect(shuffleDeckSpy).toHaveBeenCalled();
//     });
//   });


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
