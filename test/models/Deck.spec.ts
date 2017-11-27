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

  describe('When creating a deck', function() {
    let formattedDeck: object[];

    beforeEach(function() {
      formattedDeck = TestHelper.formatArrayStructure(deck.createDeck('standard'));
    });

    it("card name is defined", () => {
      expect(formattedDeck[0][0]).not.to.be.undefined;
    });

    it("card colour type is defined", () => {
      expect(formattedDeck[0][1]).not.to.be.undefined;
    });

    it("original deck position of card is defined", () => {
      expect(formattedDeck[0][2]).not.to.be.undefined;
    });

    // it("correct number of cards are created", function() {
    //   expect(formattedDeck.length).to.equal(formatArrayStructure(correctSequenceDeck()).length);
    // });

    // it("the desired sequence of cards are in correct order", function() {
    //   expect(formattedDeck).toEqual(formatArrayStructure(correctSequenceDeck()));
    // });
  });

  // this test gives an error when specifying what it is expected to throw
  describe('edge cases', function() {
    it("throws an error a if valid type of deck isn't specified", () => {
      // const error = new Error("Must specify valid deck type");
      // console.log(error);
      expect(deck.createDeck.bind(null)).to.throw("Must specify valid deck type");
    });
  });
});
