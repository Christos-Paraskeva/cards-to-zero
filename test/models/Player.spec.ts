import { expect } from 'chai';
import { Player } from '../../src/models/Player';

describe("Player", () => {
  let player = new Player(1, 'Test Name');

  it("exists", () => {
    expect(player).not.to.be.undefined;
    expect(player).to.be.an.instanceof(Player);
  });

  describe("Is initialized with", () => {
    it("an id", () => {
      expect(player.id).to.equal(1);
    });

    it("a name", () => {
      expect(player.name).to.equal('Test Name');
    });

    it("an empty array for currently held cards", () => {
      expect(player.cardsHeld).to.eql([]);
    });
  });

  describe('Can check for', () => {

    it("current player's name", () => {
      expect(player.getName()).to.equal('Test Name');
    });

    it("current player's id", () => {
      expect(player.getId()).to.equal(1);
    });

    it("current player's held cards", () => {
      expect(player.showCards()).to.eql([]);
    });
  });

  it("can create a new player", () => {
    let playerTwo = player.createPlayer(2, 'Player Two');
    expect(playerTwo).to.be.an.instanceof(Player);
    expect(playerTwo.name).to.equal('Player Two');
  });
});
