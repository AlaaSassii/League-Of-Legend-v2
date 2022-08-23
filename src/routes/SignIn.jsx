import React from 'react'

const SignIn = () => {
  return (
    <div className='SignIn'>
      <div className="container">
        <input type="text" placeholder='email'/>
        <input type="text" placeholder='password' />
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default SignIn