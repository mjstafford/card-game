import React from 'react';

const LandingPage = ()=> {
  //explains application
  //technologies used
  //introduces the team
  
  //bonus to make interactive
  return(
    <div className="landing-page-container">
      <div className="application-info">
        <h1>Application</h1>
        <p>
          Welcome to my application!<br/><br/>
          Use the navbar above to navigate between the home page and blackjack game. <br/><br/>
          In blackjack, both the player and dealer are initially dealt two cards. The player can see 
          one of the dealers cards. The goal of the game is to beat the dealers hand by 
          getting 21 (or as close to 21 without going over). <br/><br/>To increase your hand's value you can "hit" 
          to draw another card. Once you think your hand will beat the dealer's hand you "stay". After, you stay (or bust)
          the dealers hand is revealed and the winner is decided<br/><br/>

          Ways to win:
          <ul>
            <li>If you stay, and your hand is higher than the dealer</li>
            <li>If you stay, and the dealer busts</li>
          </ul>

          Ways to lose:
          <ul>
            <li>If you go over: 21 you "bust"</li>
            <li>If you stay, and the dealers hand is higher</li>
          </ul>
          
          Card Values:
          <ul>
            <li>Numerical cards are worth their value</li>
            <li>Face cards are worth 10 </li>
            <li>Ace's can be worth 1 or 11</li>
          </ul>
          Note: Aces will initially be worth 11 but if you 'hit' and an 11 would cause you to 'bust' 
          the ace will automatically be changed to be worth 1.<br/><br/>
        </p>
      </div>
      <div className="technologies-info">
        <h1>Technologies</h1>
        <dl>
          <dt>
            <img align="left" alt="JavaScript" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
            JavaScript
          </dt>
          <dt>
            <img align="left" alt="React" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
            React
          </dt>
          <dt>
            <img align="left" alt="HTML5" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
            JSX/HTML
          </dt>
          <dt>
            <img align="left" alt="CSS3" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
            CSS
          </dt>
          <dt>
            <img align="left" alt="Visual Studio Code" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
             Visual Studio Code
          </dt>
          <dt>
            <img align="left" alt="GitHub" width="30px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
            GitHub
          </dt>
          <dt>
              <img align="left" alt="Heroku Application" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/heroku.svg" /> 
              Heroku
          </dt>
        </dl>
      </div>
      <div className="team-info">
        <h1>Team</h1>
      </div>

    </div>
  )

}

export default LandingPage