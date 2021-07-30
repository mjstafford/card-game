
class Hand {
  constructor(hand){
    this.hand = hand
  }

  value(){
    //issues with two aces showing up and causing bust instead of both being set to 1
    return this.hand.reduce((total, currentCard) => {
      return total + currentCard.value(total)
    }, 0)
  }

  //shows only one card
  dealerValue(){
    // debugger
    return this.hand[1].value(0)
  }

  addCard(card) {
    this.hand.push(card)
  }

  printHand() {
    let outputArr = []
    this.hand.forEach(card => {
      outputArr.push(`${card.rank}${card.suit}`)
    });
    return outputArr.join(", ")
  }
}

export default Hand