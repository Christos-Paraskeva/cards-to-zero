"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dealer {
    constructor(shuffle) {
        this.currentPlayers = [];
        this.shuffle = shuffle;
    }
    shuffleTheDeck(deck) {
        this.shuffle.defaultShuffle(deck);
    }
}
exports.Dealer = Dealer;
