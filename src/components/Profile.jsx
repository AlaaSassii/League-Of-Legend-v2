import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { database } from '../firebase-config'

  const images1 = {
    image1:false ,image2:false , image3:false,image4:false , image5:false , image6:false
  } 
const Profile = ({userName, password , email , name , image , followers , following
,followingAccounts , followersAccounts , id , account}) => {
    console.log(userName , password ,email ,name , image , followers , following ,followingAccounts ,followersAccounts)
    const Data = {
        name,userName , email ,password ,image
      }
    const [edit ,setEdit] = useState(false)
    const [inputs, setInputs] = useState(Data) ; 
    const [images ,setImages] = useState(images1)
  const intialImages = images1 ;  
  const updateUser = async (id) => {
    const userDoc = doc(database, "users", id);
    await updateDoc(userDoc, {...account,inputs});
  };
  return (
    <div className='SignUp'>
        <div className="container">
       {
        !edit ?<>
       <img src={image} />
        <div>{name}</div>
        <div>{userName}</div>
        <div>{email}</div>
        <div >{password}</div>
        <div>followers:{followers}</div>
        <div>following:{following}</div>
        <button onClick={()=>setEdit(true)}>edit</button></> 
    :
        <>
        <div className='images'>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image1:true})}}src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt120105349c8e60d4/609ae487ea72f24924be0b05/WRSapphirePoro_512.jpg" className={images.image1&& 'nofilter'} /></div>
        <div><img  onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image2:true})}} src="https://i.pinimg.com/236x/ea/a6/68/eaa668ece7e463e23e42db4c9bab09b2.jpg" className={images.image2&& 'nofilter'}/></div>
        <div><img  onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image3:true})}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedKfR0JLlX6QdfqWQ9cmZtW0o5DI0QhN107Ajrw-Cf82L1l-MU35Mx12LCUTWmpldIDg&usqp=CAU" className={images.image3&& 'nofilter'}/></div>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image4:true})}} src="https://cdnb.artstation.com/p/assets/images/images/008/384/347/medium/cem-akkaya-3218-eastern-poro-summoner-icon.jpg?1512420575" className={images.image4&& 'nofilter'} /></div>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image5:true})}}src="https://pbs.twimg.com/media/FISX2MhXwAkoIYY.jpg" className={images.image5&& 'nofilter'} /></div>
        <div><img onClick={e =>{setInputs({...inputs , image:e.target.src});setImages({...intialImages , image6:true})}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAF1d1NkjYDlGLijo8Q8zP5U7Emz5rarp3iFauEvqFXWZnXIv3UK4mXlohn-DqZDZ-ys&usqp=CAU"  className={images.image6&& 'nofilter'}/></div>
    </div>
        <input type="text" placeholder='name' value={inputs.name} onChange={e => setInputs({...inputs,name:e.target.value})} />
        <input type="text" placeholder='username' value={inputs.userName} onChange={e => setInputs({...inputs,userName:e.target.value})} />
        <input type="text" placeholder='email'  value={inputs.email} onChange={e => setInputs({...inputs,email:e.target.value})}  />
        <input type="password" placeholder='password' value={inputs.password} onChange={e => setInputs({...inputs,password:e.target.value})}/>
        <div>followers:{followers}</div>
        <div>following:{following}</div>
        <button onClick={()=>setEdit(false)}>cancel</button> 
        <button onClick={()=>{updateUser(id)}}>edit</button>
        </>
    }
    </div>
    </div>
  )
}

export default Profile