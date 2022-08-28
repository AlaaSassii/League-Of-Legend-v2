import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { database } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
  const images1 = {
    image1:false ,image2:false , image3:false,image4:false , image5:false , image6:false
  } 
const Profile = ({userName, password , email , name , image , followers , following
,followingAccounts , followersAccounts , id , account}) => {
    // console.log(userName , password ,email ,name , image , followers , following ,followingAccounts ,followersAccounts) 
    const Data = {
        name,userName , email ,password ,image
    }
    const postsCollectionRef = collection(database,'posts')

    let navigate = useNavigate() ; 
    const [loading ,setLoading] = useState(false) ; 
    const [edit ,setEdit] = useState(false)
    const [inputs, setInputs] = useState(Data) ; 
    const [images ,setImages] = useState(images1)
  const intialImages = images1 ;  
  const updatePosts = async (id) => { 
    const data = await getDocs(postsCollectionRef) ; 
    const posts = data.docs.map(post => ({...post.data() ,postId:post.id}))
    for (let i = 0 ; i < posts.length ; i++ ) {
        console.log(posts[i])
        console.log(posts[i].postId)
        const postDoc = doc(database, "posts", posts[i].postId);
        if(posts[i].id === id) {
            await updateDoc(postDoc, {...posts[i],...inputs}); // not the best approach ; 
        }
        const arr = posts[i].commentsText.map(comment => { 
            if (comment.id === id) return ({...comment , userName:inputs.userName , image:inputs.image} ); 
            else return comment 
        })
        console.log(arr)
        await updateDoc(postDoc, {...posts[i],...inputs,commentsText:arr});
        }
        
  }
  const updateUser = async (id) => {
      updatePosts(id) ; 
      const userDoc = doc(database, "users", id);
      await updateDoc(userDoc, {...account,...inputs});
};
    const deletePosts = async () => { 
        const data = await getDocs(postsCollectionRef) ; 
        const posts = data.docs.map(post => ({...post.data() , id: post.id }))
        for (let i = 0 ; i < posts.length ; i++ ) { 
            if(posts[i].userName === userName) {
                const postDoc = doc(database, "posts", posts[i].id);
                await deleteDoc(postDoc);
            }
            else {
                const postDoc = doc(database, "posts", posts[i].id);
                const newCommentsText = posts[i].commentsText.filter(post => { 
                    return post.userName !== userName ;     
                })
                let newcomments = posts[i].comments ;
                if (newCommentsText.length < posts[i].commentsText.length) {
                    newcomments = posts[i].comments - (posts[i].commentsText.length - newCommentsText.length )
                } 
                const username = posts[i].likesUsername.find(post => post.userName === userName) ; 
                if (username !== undefined){
                    const likesUsername = posts[i].likesUsername.filter(post => post.userName !== userName) ; 
                    const likes = posts[i].likes - 1 ; 
                    await updateDoc(postDoc, {likes :posts[i].likes - 1 ,likesUsername,commentsText:newCommentsText ,comments:newcomments });
                }
                else { 
                    await updateDoc(postDoc, {commentsText:newCommentsText , comments:newcomments});
                }
            }
        }
    }
  const deleteUser = async (id) => { 
    deletePosts() ; 
    const userDoc = doc(database, "users", id);
    await deleteDoc(userDoc);
    navigate('/Signup') ; 

  }
  if (id === undefined) return <h1>No Data</h1>
  return (
    <div className='Account'>
        <div className="container">
       {
        !edit ?<>
        <div className='image'>
       <img src={image} />
       </div>
        <div>
        <div className='info'>name : {name}</div>
        <div className='info'>username : {userName}</div>
        <div className='info'>email :{email}</div>
        <div className='info'>password :{password}</div>
        <div className='info'>followers:{followers}</div>
        <div className='info'>following:{following}</div>
        </div>
        <button onClick={()=>setEdit(true)}>edit</button>
        <button onClick={()=>{deleteUser(id)}}>delete</button>
        
        </> 
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
    <div className="input">
        <input type="text" placeholder='name' value={inputs.name} onChange={e => setInputs({...inputs,name:e.target.value})} />
        <input type="text" placeholder='username' value={inputs.userName} onChange={e => setInputs({...inputs,userName:e.target.value})} />
        <input type="text" placeholder='email'  value={inputs.email} onChange={e => setInputs({...inputs,email:e.target.value})}  />
        <input type="password" placeholder='password' value={inputs.password} onChange={e => setInputs({...inputs,password:e.target.value})}/>
        </div>
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

   // for(let j = 0 ; j < posts[i].commentsText.length ; j++ ) {  
            // if (posts[i].commentsText[j].id === id) { 
                // console.log('trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            // await updateDoc(postDoc, {...posts[i],...inputs,commentsText:[...posts[i].commentsText ,{...posts[i].commentsText[j] ,userName: inputs.userName , image:inputs.image } ]}); // not the best approach ; 
                
            // }