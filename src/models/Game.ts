export class Game {
  public currentPlayerTurn: number;
  public directionOfPlay: string;

  public constructor()

  { this.currentPlayerTurn = 0;
    this.directionOfPlay = "clockwise";
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

  public endCurrentTurn():void {
    if (this.directionOfPlay === "clockwise") {
      this.currentPlayerTurn = (this.currentPlayerTurn + 1);
    } else if (this.directionOfPlay === "anti-clockwise") {
      this.currentPlayerTurn = (this.currentPlayerTurn - 1);
    }
  }

}
