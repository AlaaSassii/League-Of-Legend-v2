import { database } from '../firebase-config'
import React ,{useState , useEffect} from 'react'
const SignUp = () => {
  const [inputs, setInputs] = useState({name:'',userName:'' , email:'' ,password:'' ,copassword:'',image:''}) ; 
  const [images ,setImages] = useState({image1:false ,image2:false , image3:false,image4:false , image5:false , image6:false })
  const intialImages = {image1:false ,image2:false , image3:false,image4:false , image5:false , image6:false } ;  
  const [showAlert , setShowAlert] = useState({show:false , text:''})

  console.log(inputs)
  const Check = () => { 
    if (inputs.name && inputs.userName && inputs.email && inputs.password && inputs.copassword && inputs.image){
      return false
    }
    else return true 
  }

  const submitDatabase = () => { 
      if(Check()) {
        setShowAlert({show:true , text:'Some Data is not Completed to Sign up'})
      }
      else { 
        const {password ,copassword} = inputs 
        if (password !== copassword) 
        setShowAlert({show:true,text:'the Co-password is not password'})
        else { 
          
        }
      }
  }


  useEffect(()=>{
    if(showAlert.show){
    setTimeout(()=>{
      setShowAlert({...showAlert , show:false})
    },4000)}
  },[showAlert])
  return (
    <div className='SignUp'>

    <div className='container'>
     {showAlert.show && <div className='alert'> {showAlert.text}</div> }
    <h1>Sign Up</h1>
    <div className='form'>
      
    <div className='images'>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image1:true})}}src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt120105349c8e60d4/609ae487ea72f24924be0b05/WRSapphirePoro_512.jpg" className={images.image1&& 'nofilter'} /></div>
        <div><img  onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image2:true})}} src="https://i.pinimg.com/236x/ea/a6/68/eaa668ece7e463e23e42db4c9bab09b2.jpg" className={images.image2&& 'nofilter'}/></div>
        <div><img  onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image3:true})}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedKfR0JLlX6QdfqWQ9cmZtW0o5DI0QhN107Ajrw-Cf82L1l-MU35Mx12LCUTWmpldIDg&usqp=CAU" className={images.image3&& 'nofilter'}/></div>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image4:true})}} src="https://cdnb.artstation.com/p/assets/images/images/008/384/347/medium/cem-akkaya-3218-eastern-poro-summoner-icon.jpg?1512420575" className={images.image4&& 'nofilter'} /></div>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image5:true})}}src="https://pbs.twimg.com/media/FISX2MhXwAkoIYY.jpg" className={images.image5&& 'nofilter'} /></div>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image6:true})}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAF1d1NkjYDlGLijo8Q8zP5U7Emz5rarp3iFauEvqFXWZnXIv3UK4mXlohn-DqZDZ-ys&usqp=CAU"  className={images.image6&& 'nofilter'}/></div>
    </div>

    <div className='input'>
    <div>
        <input type="text" placeholder='name' value={inputs.name} onChange={e => setInputs({...inputs,name:e.target.value})} />
        <input type="text" placeholder='username' value={inputs.userName} onChange={e => setInputs({...inputs,userName:e.target.value})} />
    </div>
        <input type="text" placeholder='email'  value={inputs.email} onChange={e => setInputs({...inputs,email:e.target.value})}  />
        <input type="password" placeholder='password' value={inputs.password} onChange={e => setInputs({...inputs,password:e.target.value})}/>
        <input type="text" placeholder='co-password' value={inputs.copassword} onChange={e => setInputs({...inputs,copassword:e.target.value})}/>
    </div>
    </div>
    <button onClick={()=>submitDatabase()}>Sign Up</button>
    </div>
    </div>
  )
}

export default SignUp