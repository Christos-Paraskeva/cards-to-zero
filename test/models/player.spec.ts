import { expect } from 'chai';
import { Player } from '../../src/models/player';

describe("Player", () => {

  it("exists", () => {
    let player = new Player(1);
    expect(player).not.to.be.undefined;
    expect(player).to.be.an.instanceof(Player);
  });

  describe("Is initialized with", () => {
    it("an ID", () => {
      let player = new Player(1);
      expect(player.id).to.equal(1);
    });

  });

});
