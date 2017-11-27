import { Shuffle } from '../../src/models/Shuffle';
// import { ShuffleStructure } from '../../src/models/Shuffle';

export class Dealer {
    public currentPlayers:Array<object>;
    public shuffle:Shuffle;

    public constructor(shuffle: Shuffle)

    { this.currentPlayers = [];
      this.shuffle = shuffle;
    }

    public shuffleTheDeck(deck:Array<object>):void {
      // let shuffle = new Shuffle();
      this.shuffle.defaultShuffle(deck);
    }

}
