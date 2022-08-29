import React from 'react'

const Landing = () => {
  return (
    <>
    <div className='landing'>
      <div className='section1'>
          <h1>Section: One</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci recusandae in ut nulla, sed vero quia alias ducimus quod exercitationem ex repellendus nemo non aspernatur repellat consequatur maxime quos.</p>

      </div>
      <div className='signin'>
        <h3>Sign In</h3>
        <input type="text" placeholder='email' />
        <input type="password" placeholder='password' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum.</p>
        <p>Lorem, ipsum dolor. <a href="">Sign Up</a></p>
      </div>
    </div>
    </>
  )
}

export default Landing