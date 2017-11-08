export class Deck {
    public names: string[];
    public colours: string[];
    public cards: object[];

    public constructor()

    { this.names = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Skip Go', '+2', '+4', 'Choose Colour'];
      this.colours = ['Red', 'Blue', 'Yellow', 'Green'];
      this.cards = [];
    }

}
