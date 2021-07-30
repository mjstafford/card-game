
class Hand {
  constructor(hand){
    this.hand = hand
  }

  value(){
    const copyHand = [...this.hand]
    copyHand.sort((a,b) => {
      if(a.rank === "A"){
        return 1;
      }
      else if(a.rank > b.rank){
        return 1
      } else {
        return -1;
      }
    })

    return copyHand.reduce((total, currentCard) => {
        return total + currentCard.value(total)
    }, 0)
  }

  dealerValue(){
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