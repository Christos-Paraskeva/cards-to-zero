import { Shuffle } from '../../src/models/Shuffle';
import { iPlayer } from '../../src/models/Player';
import { iDeck } from '../../src/models/Deck';


export class Dealer {
    public currentPlayers: Array<iPlayer>;
    public shuffle:Shuffle;

    public constructor(shuffle: Shuffle)

    { this.currentPlayers = [];
      this.shuffle = shuffle;
    }

    public shuffleTheDeck(deck:iDeck):void {
      this.shuffle.defaultShuffle(deck);
    }

    public dealTheCards(howManyCards:number, currentPlayers:Array<iPlayer>, deck:iDeck) {
      this.currentPlayers = currentPlayers;

      if (deck.length - (currentPlayers.length * howManyCards) >= 0 && currentPlayers.length !== 0) {
        for(var i=0; i < howManyCards; i++) {
            for(var p=0; p < this.currentPlayers.length; p++) {
              this.currentPlayers[p].cardsHeld.push(deck.splice(0, 1));
            }
          }
        } else {
            throw new Error("Cannot deal: not enough cards or players");
        }
    }

}
