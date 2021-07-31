import React from 'react'
import { Link } from 'react-router-dom'

import logoImage from '/Users/tesla/Coding-Projects/Hack-a-thons/card-game/card-game/src/images/logo.jpg'

const Navbar = ()=> {

  return(
    <div>
      <div className="navbar">
        <div className="home-button">
          <Link  to="/">
            <button>Home</button>
          </Link>
        </div>

        <div className="blackjack-button" >
          <Link to="/blackjack">
            <button>Blackjack</button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  )

}

export default Navbar