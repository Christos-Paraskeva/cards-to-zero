import { expect } from 'chai';
import { Card } from '../../src/models/card';

describe("Card", () => {
  let card = new Card(0, "Zero", "Red", 1);
  console.log(card);

  it("exists", () => {
    expect(card).not.to.be.undefined;
    expect(card).to.be.an.instanceof(Card);
  });

  describe("Is initialized with", () => {
    it("a value", () => {
      expect(card.value).to.equal(0);
    });

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
