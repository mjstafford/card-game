import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar.js'
import LandingPage from './components/LandingPage.js'
import CardGame from './components/CardGame.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/blackjack" component={CardGame}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
