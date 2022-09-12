import React from 'react'
import { Link } from 'react-router-dom' ; 
const Navbar = ({condition , id}) => {
  return (
    <nav>
        <div className="container">
            <h2 className="logo"><a href='/'>League</a> </h2>
            <ul className="links">
         <li><a href='/Signup'>Sign up</a></li>
              <li><a href='/Champions'>Champions</a></li>
              <li><a href='/Matchhistroy'>Match Histroy</a></li>
          {!condition ||    <li><a href={``}>Account</a></li>}

            </ul>
        </div>
    </nav>
  )
}

export default Navbar