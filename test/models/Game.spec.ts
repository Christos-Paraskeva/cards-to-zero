import { expect } from 'chai';
import { Game } from '../../src/models/Game';
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
      console.log(game.directionOfPlay);
      console.log(game.currentPlayerTurn);
      game.endCurrentTurn();
      expect(game.currentPlayerTurn).to.equal(1);
    });

    it("display which player's turn it is", () => {
      game.endCurrentTurn();
      game.endCurrentTurn();
      expect(game.currentPlayerTurn).to.equal(2);
    });
  });
});
