import { expect } from 'chai';
import { Shuffle } from '../../src/models/Shuffle';
import { TestHelper } from '../TestHelper';

describe("Shuffle", () => {
  let shuffle = new Shuffle();

  it("exists", () => {
    expect(shuffle).not.to.be.undefined;
    expect(shuffle).to.be.an.instanceof(Shuffle);
  });

  describe("Is initialized with", () => {
    it("variable confirming whether the shuffle has been performed correctly - set to false by default", () => {
       expect(shuffle.correctShuffle).to.equal(false);
    });

    describe("When Shuffling", () => {
      let testDeck = TestHelper.minimizedTestDeck();

      it("the default shuffle method does not return any two cards in sequence", () => {
        let shuffledCards = shuffle.defaultShuffle(testDeck);
        // console.log(shuffledCards);
        expect(shuffledCards).not.to.eql(undefined);
        expect(shuffledCards).not.to.eql([ Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }) ]);
        expect(shuffledCards).not.to.eql([ Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }) ]);
        expect(shuffledCards).not.to.eql([ Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }) ]);
      });
    });

    // describe("Edge Cases", () => {
    //   let testDeck = TestHelper.minimizedTestDeck();
    //   testDeck = [];
    //   it("throws an error when the deck is empty", () => {
    //     let emptyDeck: Array<any>;
    //     expect(shuffle.defaultShuffle.bind(null, emptyDeck)).to.throw("Cannot shuffle: there is no deck");
    //   });
    // });
  });
});
