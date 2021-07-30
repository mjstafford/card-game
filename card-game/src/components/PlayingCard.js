import React from 'react'

const PlayingCard = (props)=>{
  const { card } = props;

  const suit = card.suit
  const rank = card.rank

  let color = "black"
  if(card.suit === '♦' || card.suit ===  '♥'){
    color = "red"
  }

  if(props.card === "blank"){
    return(
      <div className="cardContainer blank">
        <p className="cardRankSuitTop">?</p>
        <p className="cardSuit">?</p>
        <p className="cardRankSuitBottom">? </p>
      </div>
    )
  } else {
    return(
      <div className={"cardContainer " + color}>
        <p className="cardRankSuitTop">{rank}{suit}</p>
        <p className="cardSuit">{suit}</p>
        <p className="cardRankSuitBottom">{rank}{suit}</p>
      </div>
    )
  }
}

export default PlayingCard