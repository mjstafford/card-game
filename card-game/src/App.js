import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar.js'
import LandingPage from './components/LandingPage.js'
import CardGame from './components/CardGame.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/cardgame" component={CardGame}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
