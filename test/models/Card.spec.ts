import { expect } from 'chai';
import { Card } from '../../src/models/Card';

describe("Card", () => {
  let card = new Card("Zero", "Red", 1);

  it("exists", () => {
    expect(card).not.to.be.undefined;
    expect(card).to.be.an.instanceof(Card);
  });

  describe("Is initialized with", () => {
    it("a name", () => {
      expect(card.name).to.equal('Zero');
    });

    it("a colour", () => {
      expect(card.colour).to.equal('Red');
    });

    it("an original deck position", () => {
      expect(card.originalDeckPosition).to.equal(1);
    });
  });
});
