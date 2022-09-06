import React, { useEffect ,useState} from 'react'
import {useParams} from 'react-router-dom'
import { collection , getDocs , addDoc, updateDoc  ,doc} from 'firebase/firestore';
import { database } from '../firebase-config';
import Posts from '../components/Posts';
import NavAccount from '../components/NavAccount';
const Home = () => {
    // Database
    const usersCollectionRef = collection(database , 'users') ;
    const PostCollectionRef = collection(database , 'posts') ; 

    // React
    const [loading ,setLoading] = useState(true)
    const [user , setUser] = useState('') ;  
    const [inputValue , setInputValue] = useState('') ; 
    console.log('UUUUSSSSERRRRR',user)
    const {id } = useParams() ; 
    useEffect(() => {
        setLoading(true) ; 
        const getUser = async () => { 
            const newData = await getDocs(usersCollectionRef) ; 
            setUser({...newData.docs.find(account => account.id == id).data() ,id: newData.docs.find(account => account.id == id).id}) ;
            setLoading(false) 
        }
        getUser() ; 
    }, []) ; 
   
    // functions 
    const AddPost = async () => { 
        // we will add a post and create new key in users called posts and it will help us 
        // get the post that created by the user 
        // 1# create a Id 
        const postId = new Date().getTime() ; 
        // 2# Add postsId in user first 
        const userDoc = doc(database , 'users' , user.id) ;
        await updateDoc(userDoc , {...user ,postsId:[...user.postsId , postId]})   ; 
        // 3# Create that post  
        await addDoc(PostCollectionRef, {...user ,post:inputValue , time:new Date() ,likes:0 , comments:0  ,commentsText:[]   ,likesUsername:[] ,postId ,
        });
        setInputValue('')
    }
    if (loading) return <h1>Loading...</h1>
    else return (
        <>
        <NavAccount id={user.id}/>
    <div className='Home'>
    <div className='container' style={{margin:'auto'}}>
        <input type="text" placeholder='Add a Post' value={inputValue} onChange={e => setInputValue(e.target.value) }/> <button onClick={AddPost}>Create</button>
        <Posts user={user}/>
    </div>
    </div>
    </>
  )
}

export default Home