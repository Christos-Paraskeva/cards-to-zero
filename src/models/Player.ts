import { Card } from '../../src/models/Card';


export interface iPlayer {
    // new (): Player;
    // correctShuffle(deck:DeckStructure): boolean;
    cardsHeld:Array<Card>;
    // _validateCorrectShuffle(flag: any):void
}

export class Player {
    public id: number;
    public name: string;
    public cardsHeld: object[];

    public constructor(id: number, name: string) { this.id = id;
                                                   this.name = name;
                                                   this.cardsHeld = [];
                                                 }

    public getId():number {
      return this.id;
    }

    public getName():string {
      return this.name;
    }

    public showCards():Array<object> {
      return this.cardsHeld;
    }

    public createPlayer(id: number, name: string):Player {
      return new Player(id, name);
    }
}
