import React from 'react'
import { Link } from 'react-router-dom'
const NavAccount = ({id}) => {
  return (
    <nav className='nav-account'>
      <div className="container">
      <h1>Logo</h1>
      <div>
      <li><a href='/Champions'>Champions</a></li>
      <li><a href='/Matchhistroy'>Match Histroy</a></li>
      <li><a href={`/Account/${id}`}>Account</a></li>
      </div>
      </div>
    </nav>
  )
}

export default NavAccount