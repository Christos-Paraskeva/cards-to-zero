import { iCard } from '../../src/models/Card';
import { iDeck } from '../../src/models/Deck';

export class Game {
  public currentPlayerTurn: number;
  public directionOfPlay: string;
  public currentCardInPlay: iCard;
  public activeGame: boolean;


  public constructor()

  { this.currentPlayerTurn = 0;
    this.directionOfPlay = "clockwise";
    this.currentCardInPlay = null;
    this.activeGame = false;
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

  public checkNextPlayerTurn():number {
    if (this.directionOfPlay === "clockwise") {
      return this.currentPlayerTurn = (this.currentPlayerTurn + 1);
    }
    else if (this.directionOfPlay === "anti-clockwise") {
      return this.currentPlayerTurn = (this.currentPlayerTurn - 1);
    }
  }

  public endCurrentTurn():void {
    this.currentPlayerTurn = this.checkNextPlayerTurn();
  }

  public setCurrentCard(cardToPutDown:iCard):void {
    this.currentCardInPlay = cardToPutDown;
  }

  public setFirstCard(deck:iDeck):void {
    this.currentCardInPlay = deck[0];
  }

}
