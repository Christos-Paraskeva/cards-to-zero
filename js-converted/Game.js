"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(currentPlayers) {
        this.currentPlayerTurn = 0;
        this.directionOfPlay = "clockwise";
        this.currentCardInPlay = null;
        this.activeGame = true;
        this.currentPlayers = currentPlayers;
        this.previousWinner = null;
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
    calculateWhichPlayerTurnNext() {
        if (this.directionOfPlay === "clockwise") {
            return this.currentPlayerTurn = (this.currentPlayerTurn + 1);
        }
        else if (this.directionOfPlay === "anti-clockwise") {
            return this.currentPlayerTurn = (this.currentPlayerTurn - 1);
        }
    }
    endCurrentTurn() {
        let currentPlayer = this.findCurrentPlayer();
        this.checkIfWon(currentPlayer);
        this.currentPlayerTurn = this.calculateWhichPlayerTurnNext();
    }
    setCurrentCard(cardToPutDown) {
        this.currentCardInPlay = cardToPutDown;
    }
    setFirstCard(deck) {
        this.currentCardInPlay = deck[0];
    }
    checkIfWon(player) {
        if (player.cardsHeld.length === 0) {
            this.previousWinner = player.id;
            this.activeGame = false;
        }
    }
    findCurrentPlayer() {
        if (this.currentPlayerTurn !== 0) {
            return this.currentPlayers[this.currentPlayerTurn - 1];
        }
        else {
            return this.currentPlayers[this.currentPlayerTurn];
        }
    }
    calculateCorrectPlayerTurn() {
        if (this.currentPlayerTurn === (0 | (this.currentPlayers.length))) {
            if (this.directionOfPlay === 'clockwise') {
                this.currentPlayerTurn = 0;
            }
            else if (this.directionOfPlay === 'anti-clockwise') {
                this.currentPlayerTurn = this.currentPlayers.length;
            }
        }
    }
}
exports.Game = Game;
