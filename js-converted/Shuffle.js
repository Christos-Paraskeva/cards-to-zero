"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shuffle {
    constructor() {
        this.correctShuffle = false;
    }
    defaultShuffle(deck) {
        let i = 0;
        let r = 0;
        let temp = null;
        if (deck.length !== 0) {
            while (this.correctShuffle === false) {
                for (i = deck.length - 1; i > 0; i -= 1) {
                    r = Math.floor(Math.random() * (i + 1));
                    temp = deck[i];
                    deck[i] = deck[r];
                    deck[r] = temp;
                }
                this._validateCorrectShuffle(deck);
            }
            return deck;
        }
        else {
            throw new Error("Cannot shuffle: there is no deck");
        }
    }
    _validateCorrectShuffle(deck) {
        let confirmedCardSequence = false;
        let i = 0;
        for (i = 0; i < deck.length - 1; i++) {
            if ((deck[i].originalDeckPosition - deck[i + 1].originalDeckPosition) === -1) {
                confirmedCardSequence = true;
            }
        }
        if (confirmedCardSequence === false) {
            this.correctShuffle = true;
        }
    }
}
exports.Shuffle = Shuffle;
