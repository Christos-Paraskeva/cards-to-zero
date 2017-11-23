"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor() {
        this.currentPlayerTurn = 0;
        this.directionOfPlay = "clockwise";
    }
    reverseCurrentDirection() {
        if (this.directionOfPlay === "clockwise") {
            this.directionOfPlay = 'anti-clockwise';
        }
        else {
            this.directionOfPlay = 'clockwise';
        }
    }
    getCurrentDirectionOfPlay() {
        return this.directionOfPlay;
    }
}
exports.Game = Game;
