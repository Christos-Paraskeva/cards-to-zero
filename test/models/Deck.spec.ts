import { expect } from 'chai';
import { Deck } from '../../src/models/Deck';
import { TestHelper } from '../TestHelper';

describe("Deck", () => {
  let deck = new Deck();

  it("exists", () => {
    expect(deck).not.to.be.undefined;
    expect(deck).to.be.an.instanceof(Deck);
  });

  describe("Is initialized with", () => {
    it("an array with all the different names for the cards", () => {
      expect(deck.names).to.eql(TestHelper.cardNames());
    });

    it("an array with all the different colours for the cards", () => {
      expect(deck.colours).to.eql(TestHelper.colours());
    });

    it("an empty array of cards", () => {
      expect(deck.cards).to.eql([]);
    });
  });
});
