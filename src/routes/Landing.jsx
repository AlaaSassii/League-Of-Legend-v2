import React , {useEffect , useState} from 'react'
import { collection  ,docs, doc, getDocs} from 'firebase/firestore'
import { database } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Landing = () => {
  let navigate = useNavigate() ; 
  const accounstRef = collection(database , 'users')
  const [data ,setData] = useState([]) ;
  const [inputs ,setInputs] = useState({email:'' , password:''}) ;  
  const [loading ,setLoading] = useState(false)
  console.log(data)
  useEffect(()=>{
    const getUsers = async () => { 
      const data = await getDocs(accounstRef) ; 
      setData(data.docs.map(user => ({email:user.data().email , password:user.data().password , ...user.data()}))) ; 
    }
    getUsers() ; 
  },[])

  const Signin = async () => { 
    const user = data.find(user => user.email === inputs.email && user.password === inputs.password) ; 
    if (user === undefined){
      alert('user not found ')
    }
    else { 
      const data = await getDocs(accounstRef) ; 
      const ID =   data.docs.find(user => user.userName === data.userName).id ; 
      navigate(`/Home/${ID}`)
    }
  }
  return (
    <>
    <Navbar/>
    <div className='landing'>
      <div className='section1'>
          <h1>Section: One</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci recusandae in ut nulla, sed vero quia alias ducimus quod exercitationem ex repellendus nemo non aspernatur repellat consequatur maxime quos.</p>

      </div>
      <div className='signin'>
        <h3>Sign In</h3>
        <input type="text" placeholder='email' onChange={e => setInputs({...inputs , email:e.target.value})}/>
        <input type="password" placeholder='password' onChange={e => setInputs({...inputs , password:e.target.value})} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum.</p>
        <p>Lorem, ipsum dolor. <a href="/Signup">Sign Up</a></p>
        <button onClick={Signin}>Sign in </button>
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
        <img src="https://www.mobafire.com/images/champion/skins/landscape/yone-dawnbringer-762x.jpg" alt="yone.png" />
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
      <div className="container">
        <div className='box'>
            <img src="https://turbosmurfs.gg/storage/splash/Kayn_1.jpg" alt="" />
            <div className='layer'>
              <div className='info'>
              <h3>PENTAKILL MORDAISER</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolor rem consequuntur ullam veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quaerat iusto vero repellendus fugit illum doloribus quia cupiditate quis, necessitatibus optio natus voluptates deleniti qui eveniet, ex, quae officiis magnam.</p>
             
              </div>
            </div>
        </div>

        <div className='box'>
            <img src="https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/kayn_15.jpg" alt="" />
            <div className='layer'>
              <div className='info'>
              <h3>PENTAKILL MORDAISER</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolor rem consequuntur ullam veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quaerat iusto vero repellendus fugit illum doloribus quia cupiditate quis, necessitatibus optio natus voluptates deleniti qui eveniet, ex, quae officiis magnam.</p>
              </div>
            </div>
        </div>

        <div className='box'>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_8.jpg" alt="" />
            <div className='layer'>
              <div className='info'>
              <h3>PENTAKILL MORDAISER</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolor rem consequuntur ullam veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quaerat iusto vero repellendus fugit illum doloribus quia cupiditate quis, necessitatibus optio natus voluptates deleniti qui eveniet, ex, quae officiis magnam.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing