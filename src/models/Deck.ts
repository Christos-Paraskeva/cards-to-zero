import { Card } from '../../src/models/Card';
import { iCard } from '../../src/models/Card';


export interface iDeck {
  // new (): Deck;
  // splice: any;
  cards:iCard[];
}

export class Deck {
    public names: string[];
    public colours: string[];
    public cards: iCard[];

    public constructor()

    { this.names = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Skip Go', '+2', '+4', 'Choose Colour'];
      this.colours = ['Red', 'Blue', 'Yellow', 'Green'];
      this.cards = [];
    }

    public createDeck(type: string): iCard[] {
      if (type === 'standard') {
      let positionInDeck = 1;
      // use forEach loop?
      for(let s = 0; s < this.colours.length; s++) {
        for(let v = 0; v < this.names.length; v++) {
          this.cards.push(new Card(this.names[v], this.colours[s], positionInDeck) );
          positionInDeck += 1;
        }
      }
      return this.cards;
    }
    else {
      throw "Must specify valid deck type";
    }
  }

}
