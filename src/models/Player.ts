import { iCard } from '../../src/models/Card';


export interface iPlayer {
    // new (): Player;
    id: number
    name: string
    cardsHeld:iCard[];
}

export class Player {
    public id: number;
    public name: string;
    public cardsHeld: iCard[];

    public constructor(id: number, name: string)
    { this.id = id;
      this.name = name;
      this.cardsHeld = [];
    }

    public getId():number {
      return this.id;
    }

    public getName():string {
      return this.name;
    }

    public showCards():iCard[] {
      return this.cardsHeld;
    }

    public createPlayer(id: number, name: string):iPlayer {
      return new Player(id, name);
    }
}
