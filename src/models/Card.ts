export interface iCard {
  // new (name: string, colour: string, originalDeckPosition: number): Card;
  name: string;
  colour: string;
  originalDeckPosition: number;
}

export class Card {
    public name: string;
    public colour: string;
    public originalDeckPosition: number;

    public constructor(name: string, colour: string, originalDeckPosition: number)

    {
      this.name = name;
      this.colour = colour;
      this.originalDeckPosition = originalDeckPosition;
    }

}
