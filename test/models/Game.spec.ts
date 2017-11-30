import { expect } from 'chai';
import { Game } from '../../src/models/Game';
import { Card } from '../../src/models/Card';
// import { Player } from '../../src/models/Player';
import { iPlayer } from '../../src/models/Player';
import { TestHelper } from '../TestHelper';

describe("Game", () => {
  let game: Game;
  let currentPlayers: iPlayer[] = [];

  beforeEach(() => {
    currentPlayers = TestHelper.currentPlayersTest()
    game = new Game(currentPlayers);
  });

  it("exists", () => {
    expect(game).not.to.be.undefined;
    expect(game).to.be.an.instanceof(Game);
  });

  describe("Is initialized with", () => {
    it("the current players", () => {
      expect(game.currentPlayers).to.equal(currentPlayers);
    });

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
      expect(game.activeGame).to.equal(true);
    });

    it("a value for the previous game winner set to null by default", () => {
      expect(game.previousWinner).to.equal(null);
    });
  });

  describe("Can", () => {

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
      expect(game.calculateWhichPlayerTurnNext()).to.equal(1);
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

    it("check if a player has won if they have no cards and sets them as previous winner", () => {
      let player = game.currentPlayers[0];
      game.checkIfWon(player);
      expect(game.previousWinner).to.equal(player.id);
      expect(game.activeGame).to.equal(false);
    });

    it("check if a player has won if they still have cards left and does not set them as previous winner", () => {
      let player = game.currentPlayers[1];
      game.checkIfWon(player);
      expect(game.previousWinner).to.equal(null);
      expect(game.activeGame).to.equal(true);
    });
  });
});
