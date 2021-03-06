"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("../../src/models/Card");
class Deck {
    constructor() {
        this.names = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Skip Go', '+2', '+4', 'Choose Colour'];
        this.colours = ['Red', 'Blue', 'Yellow', 'Green'];
        this.cards = [];
    }
    createDeck(type) {
        if (type === 'standard') {
            let positionInDeck = 1;
            for (let s = 0; s < this.colours.length; s++) {
                for (let v = 0; v < this.names.length; v++) {
                    this.cards.push(new Card_1.Card(this.names[v], this.colours[s], positionInDeck));
                    positionInDeck += 1;
                }
            }
            return this.cards;
        }
        else {
            throw "Must specify valid deck type";
        }
    }
}
exports.Deck = Deck;
