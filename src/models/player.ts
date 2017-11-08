export class Player {
    public id: number;
    public name: string;
    public cardsHeld: object[];

    public constructor(id: number, name: string) { this.id = id;
                                                   this.name = name;
                                                   this.cardsHeld = []
                                                 }
}
