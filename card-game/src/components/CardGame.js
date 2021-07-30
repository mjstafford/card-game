import React, { useState, useEffect} from 'react';

import Deck from '../models/Deck.js'
import Hand from '../models/Hand.js'
import PlayingCard from './PlayingCard'

import aiImage from '/Users/tesla/Coding-Projects/Hack-a-thons/card-game/card-game/src/images/dealer-icon.jpg'
import playerImage from '/Users/tesla/Coding-Projects/Hack-a-thons/card-game/card-game/src/images/player-icon.png'

const CardGame = ()=> {
 const [playerHand, setPlayerHand] = useState([])
 const [aiHand, setAiHand] = useState([])
 const [deck, setDeck] = useState([])
 const [update, setUpdate] = useState(false)
 const [busted, setBusted] = useState(false)
 const [stay, setStay] = useState(false)
 
  const dealHands = () => {
    let newDeck = new Deck();
    let tempPlayer = []
    let tempAi = []
    
    for (let i=0; i<2; i++){
      tempPlayer.push(...playerHand, newDeck.deal());
      tempAi.push(...playerHand, newDeck.deal());
    }

    let tempPlayerHand = new Hand(tempPlayer);
    let tempAiHand = new Hand(tempAi);

    setPlayerHand(tempPlayerHand);
    setAiHand(tempAiHand);
    setDeck(newDeck)
  }

  const playerHits = ()=> {
    if(playerHand.value() < 22){
      let card = deck.deal()
      playerHand.addCard(card)
      setPlayerHand(playerHand)
      console.log(playerHand)
    } 
    if (playerHand.value() > 21) {
      setBusted(true)
    }
    setUpdate(true)
  }

  const playerStays = ()=> {
    if(!busted) {
      while(aiHand.value() <= 17){
        let card = deck.deal()
        aiHand.addCard(card)
        console.log(aiHand)
        console.log("computer hit")
        setAiHand(aiHand)
      }
      setStay(true)
    } 
  }

  const newGame = ()=> {
    window.location.reload();
  }

  let bustedDisplay = "hidden"
  if(busted){
    bustedDisplay = "visible"
  }
  
  let stayDisplay = false
  if(stay){
    stayDisplay = true
  }

  let winner=""
  if(stay || busted){
    if (busted){
      winner = "AI wins"
    } else {
      if(aiHand.value() > 21){
        winner = "You win!"
      }
      else if(playerHand.value() === aiHand.value()){
        winner = "tie"
      } else if (playerHand.value() > aiHand.value()){
        winner = "You win!"
      } else {
        winner = "AI wins"
      }
    }
  }

  let disableButton=""
  if(stay || busted) {
    disableButton="inactive"
  }

  let hideDealerCard="hidden"
  if(aiHand.hand && !busted && !stay) {
    hideDealerCard="visible"
  } 

  //create cards
  let playerCards = []
  if(playerHand.hand){
    playerCards = playerHand.hand.map(card => {
      return (
        <PlayingCard 
          key={card.suit + card.rank}
          card={card}
        />
      )
    })
  }

  let aiCards = []
  if(aiHand.hand && !busted && !stay){
    let card = aiHand.hand[1];
    aiCards.push(<PlayingCard 
      key={"tbd"}
      card="blank"
    />)
    aiCards.push(<PlayingCard 
        key={card.suit + card.rank}
        card={card}
      />
    )
  } else if (aiHand.hand){
    aiCards = aiHand.hand.map(card => {
      return (
        <PlayingCard 
          key={card.suit + card.rank}
          card={card}
        />
      )
    })
  }

  useEffect(()=>{
    dealHands()
  },[])

  useEffect(()=>{
    setUpdate(false)
  },[update])
  
  return(
    <div className="game-container">
      <h1 className="black game-header">Blackjack</h1>
      <div className="image-and-score">
        <img className="icon" src={aiImage} />
        <div className={!stayDisplay ? bustedDisplay : ""} >{ aiHand.hand ? aiHand.value() : 0}</div>
        <div className={hideDealerCard} >{ aiHand.hand ? aiHand.dealerValue(): ""}</div>
      </div>
      <div className="dealer">
        <div>
          {aiCards}
        </div>
      </div>
        <div className="image-and-score">
          <img className="icon" src={playerImage} />
          <div>{ playerHand.hand ? playerHand.value() : 0}  </div>
        </div>
      <div className="dealer">
        <div>
          {playerCards}
        </div>
      </div>


      <div>
        <h2 className={!stayDisplay ? bustedDisplay : ""} >{winner}</h2>
      </div>
      <div className="player-buttons">
        <button disabled={stayDisplay || busted} className={disableButton} onClick={playerHits}> Hit </button>
        <button disabled={stayDisplay || busted} className={disableButton} onClick={playerStays}> Stay </button>
        <button className={!stayDisplay ? bustedDisplay : ""} onClick={newGame}> Play Again </button>
      </div>
    </div>
  )
}

export default CardGame