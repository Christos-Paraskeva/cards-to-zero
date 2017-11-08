export class Player {
    public id: number;
    public name: string;
    public cardsHeld: object[];

    public constructor(id: number, name: string) { this.id = id;
                                                   this.name = name;
                                                   this.cardsHeld = [];
                                                 }

    public getId() {
      return this.id;
    }

    public getName() {
      return this.name;
    }

    public showCards() {
      return this.cardsHeld;
    }

    public createPlayer(id, name) {
      return new Player(id, name);
    }
}
