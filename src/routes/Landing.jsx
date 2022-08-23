import React from 'react'

const Landing = () => {
  return (
    <div className='singin'>
        <div className='container'>
        <h1>League Of Legedns</h1>
        <div className='form'>
            <h2>Sign In</h2>
            <input placeholder='email'/> 
            <input placeholder='password'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, amet quis.</p>
            <p>don't have account <a href="SingUp">Sign Up</a> </p>
            <button>Sign In</button>
        </div>
        </div>
        
    </div>
  )
}

export default Landing