"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.cardsHeld = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    showCards() {
        return this.cardsHeld;
    }
    createPlayer(id, name) {
        return new Player(id, name);
    }
}
exports.Player = Player;
