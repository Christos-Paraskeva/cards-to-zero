import { expect } from 'chai';
import { Player } from '../../src/models/player';

describe("Player", () => {

  it("exists", () => {
    let player = new Player(1, 'Test Name');
    expect(player).not.to.be.undefined;
    expect(player).to.be.an.instanceof(Player);
  });

  describe("Is initialized with", () => {
    it("an id", () => {
      let player = new Player(1, 'Test Name');
      expect(player.id).to.equal(1);
    });

    it("a name", () => {
      let player = new Player(1, 'Test Name');
      expect(player.name).to.equal('Test Name');
    });

    it("an empty array for currently held cards", () => {
      let player = new Player(1, 'Test Name');
      expect(player.cardsHeld).to.eql([]);
    });

  });

});
