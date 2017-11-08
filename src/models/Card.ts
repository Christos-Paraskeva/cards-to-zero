export class Card {
    public value: number;
    public name: string;
    public colour: string;
    public originalDeckPosition: number;

    public constructor(value: number, name: string, colour: string, originalDeckPosition: number)

    { this.value = value;
      this.name = name;
      this.colour = colour;
      this.originalDeckPosition = originalDeckPosition;
    }

}
