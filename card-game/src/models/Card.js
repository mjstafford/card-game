
class Card {
  constructor(rank, suit){
    this.suit = suit;
    this.rank = rank;
    this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  value(total) {
    if (this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
      return 10;
    } else if (this.rank === 'A'){
      if (total + 11 > 21){
        return 1
      } else {
        return 11;
      }
    } else {
      let index = this.ranks.indexOf(this.rank)
      return index + 2;
    }
  }
}

export default Card