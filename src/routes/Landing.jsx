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
    <div className='boxes-with-images'>
      <div className='Menu'>Menu</div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src="https://www.nme.com/wp-content/uploads/2021/09/Viego-pentakill-league-of-legends-2000x1270-1.jpg" alt='image' />
          </div>
          <div className='text'>
              <h3>Title </h3> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae, delectus iure pariatur iusto impedit odit porro voluptas voluptatem corporis, ab saepe asperiores dignissimos adipisci?</p>
          </div>
        </div>

        <div className='box'>
          <div className='image'>
            <img src="https://www.nme.com/wp-content/uploads/2021/09/Pentakill-league-of-legends-2000x1270-1.jpg" alt='image' />
          </div>
          <div className='text'>
              <h3>Title </h3> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae, delectus iure pariatur iusto impedit odit porro voluptas voluptatem corporis, ab saepe asperiores dignissimos adipisci?</p>
          </div>
        </div>

        <div className='box'>
          <div className='image'>
            <img src="https://www.nme.com/wp-content/uploads/2021/09/Nightbringer-Tryndamere-League-Of-Legends-2000x1270-1.jpg" alt='image' />
          </div>
          <div className='text'>
              <h3>Title </h3> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae, delectus iure pariatur iusto impedit odit porro voluptas voluptatem corporis, ab saepe asperiores dignissimos adipisci?</p>
          </div>
        </div>
      </div>
    </div>
    <div className='skins-section'>
      <h3>Our New Skins</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      <div className="contanier">
        <div className='box'>
            <img src="https://preview.redd.it/rhj8icdltfj71.png?auto=webp&s=4467b0ce268ce40ba1aa828006b1ee329ea4bc1d" alt="" />
            <div className='layer'>
              <div className='info'>
              <h3>PENTAKILL MORDAISER</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolor rem consequuntur ullam veritatis!</p>
              <ul>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis optio similique?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              </div>
            </div>
        </div>

        <div className='box'>
            <img src="https://preview.redd.it/rhj8icdltfj71.png?auto=webp&s=4467b0ce268ce40ba1aa828006b1ee329ea4bc1d" alt="" />
            <div className='layer'>
              <div className='info'>
              <h3>PENTAKILL MORDAISER</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolor rem consequuntur ullam veritatis!</p>
              <ul>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis optio similique?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              </div>
            </div>
        </div>

        <div className='box'>
            <img src="https://preview.redd.it/rhj8icdltfj71.png?auto=webp&s=4467b0ce268ce40ba1aa828006b1ee329ea4bc1d" alt="" />
            <div className='layer'>
              <div className='info'>
              <h3>PENTAKILL MORDAISER</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolor rem consequuntur ullam veritatis!</p>
              <ul>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis optio similique?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing