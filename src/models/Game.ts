import { iCard } from '../../src/models/Card';
import { iDeck } from '../../src/models/Deck';
import { iPlayer } from '../../src/models/Player';

export class Game {
  public currentPlayerTurn: number;
  public directionOfPlay: string;
  public currentCardInPlay: iCard;
  public activeGame: boolean;
  public currentPlayers: iPlayer[];
  public previousWinner: number

  public constructor(currentPlayers:iPlayer[])
  { this.currentPlayerTurn = 0;
    this.directionOfPlay = "clockwise";
    this.currentCardInPlay = null;
    this.activeGame = true;
    this.currentPlayers = currentPlayers;
    this.previousWinner = null;
  }

  public reverseCurrentDirection():void {
    if (this.directionOfPlay === "clockwise") {
      this.directionOfPlay = 'anti-clockwise';
    } else {
      this.directionOfPlay = 'clockwise';
    }
  }

  public getCurrentDirectionOfPlay():string {
    return this.directionOfPlay;
  }

  public calculateWhichPlayerTurnNext():number {
    if (this.directionOfPlay === "clockwise") {
      return this.currentPlayerTurn = (this.currentPlayerTurn + 1);
    }
    else if (this.directionOfPlay === "anti-clockwise") {
      return this.currentPlayerTurn = (this.currentPlayerTurn - 1);
    }
  }

  public endCurrentTurn():void {
    let currentPlayer = this.findCurrentPlayer();
    this.checkIfWon(currentPlayer);
    this.currentPlayerTurn = this.calculateWhichPlayerTurnNext();
  }

  public setCurrentCard(cardToPutDown:iCard):void {
    this.currentCardInPlay = cardToPutDown;
  }

  public setFirstCard(deck:iDeck):void {
    this.currentCardInPlay = deck[0];
  }

  public checkIfWon(player: iPlayer):void {
    if(player.cardsHeld.length === 0) {
      this.previousWinner = player.id;
      this.activeGame = false;
    }
  }

  private findCurrentPlayer():iPlayer {
    if (this.currentPlayerTurn !== 0) {
      return this.currentPlayers[this.currentPlayerTurn - 1];
    }
    else {
      return this.currentPlayers[this.currentPlayerTurn];
    }
  }

  private calculateCorrectPlayerTurn():void {
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
