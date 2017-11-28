import { expect } from 'chai';
import { Game } from '../../src/models/Game';
import { Card } from '../../src/models/Card';
import { TestHelper } from '../TestHelper';

describe("Game", () => {
  let game = new Game();

  it("exists", () => {
    expect(game).not.to.be.undefined;
    expect(game).to.be.an.instanceof(Game);
  });

  describe("Is initialized with", () => {
    it("a currentPlayerTurn property set to 0 by default", () => {
      expect(game.currentPlayerTurn).to.equal(0);
    });

    it("a directionOfPlay property set to clockwise by default", () => {
      expect(game.directionOfPlay).to.equal('clockwise');
    });

    it("a current card in play set to null by default", () => {
      expect(game.currentCardInPlay).to.not.be.undefined;
    });

    it("a boolean value for whether the game is currently active or not", () => {
      expect(game.activeGame).to.equal(false);
    });
  });

  describe("Can", () => {

    beforeEach(() => {
      game = new Game();
    });

    it("get the current direction of play", () => {
      expect(game.getCurrentDirectionOfPlay()).to.equal('clockwise');
    });

    it("reverse the current direction of play", () => {
      game.reverseCurrentDirection();
      expect(game.directionOfPlay).to.equal('anti-clockwise');
    });

    it("goes to the next player after the 'endCurrentTurn' function is called", () => {
      game.endCurrentTurn();
      expect(game.currentPlayerTurn).to.equal(1);
    });

    it("display which player's turn it is", () => {
      game.endCurrentTurn();
      game.endCurrentTurn();
      expect(game.currentPlayerTurn).to.equal(2);
    });

    it("display which player is the next turn", () => {
      expect(game.checkNextPlayerTurn()).to.equal(1);
    });

    it("puts a first card down from the deck", () => {
      let deck = TestHelper.dealerTestDeck();
      game.setFirstCard(deck);
      expect(game.currentCardInPlay).to.equal(deck[0]);
    });

    it("set a card as the current card in play", () => {
      let card = new Card('Three', 'Red', 4);
      game.setCurrentCard(card);
      expect(game.currentCardInPlay).to.equal(card);
    });
  });
});
