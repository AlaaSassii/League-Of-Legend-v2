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
    <div className='categories'>
      <h1 className='Menu'>Menu</h1>
      <div className='container'>
        <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa est nihil dicta provident, mollitia fugit! Blanditiis voluptate similique, consectetur praesentium possimus inventore consequatur reprehenderit, corrupti voluptatibus placeat dolorem vitae libero. </p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa est nihil dicta provident, mollitia fugit! Blanditiis voluptate similique, consectetur praesentium possimus inventore consequatur reprehenderit, corrupti voluptatibus placeat dolorem vitae libero. </p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa est nihil dicta provident, mollitia fugit! Blanditiis voluptate similique, consectetur praesentium possimus inventore consequatur reprehenderit, corrupti voluptatibus placeat dolorem vitae libero. </p></div>
      </div>
    </div>
    <div className='champions-section'>
      <div className='container'>
      <div className='image'>
        <img src="https://wallpaperaccess.com/full/7975136.png" alt="yone.png" />
      </div>
      <div className='text'>
      <h3>Champions List</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus exercitationem pariatur assumenda nesciunt quibusdam magnam, corporis rem, recusandae eum quis quaerat dicta voluptate provident sint quidem aliquam temporibus autem.</p>
      <a href="">Go See Champions List</a>
      </div>
      </div>
    </div>

    </>
  )
}

export default Landing