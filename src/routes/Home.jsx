import React, { useEffect ,useState} from 'react'
import {useParams} from 'react-router-dom'
import { collection , getDocs , addDoc } from 'firebase/firestore';
import { database } from '../firebase-config';
import Posts from '../components/Posts';
const Home = () => {
    // Database
    const usersCollectionRef = collection(database , 'users') ;
    const PostCollectionRef = collection(database , 'posts') ; 

    // React
    const [loading ,setLoading] = useState(true)
    const [user , setUser] = useState('') ;  
    const [inputValue , setInputValue] = useState('') ; 
    console.log('user',user)
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
        const Time = new Date()
        await addDoc(PostCollectionRef, {...user ,post:inputValue , time:Time ,likes:0 , comments:0  ,following:0 , followers:0  ,commentsText:[]   ,likesUsername:[] 
        });
        setInputValue('')
    }
    if (loading) return <h1>Loading...</h1>
    else return (
    <div className='Home'>
    <div className='container' style={{margin:'auto'}}>
        <input type="text" placeholder='Add a Post' value={inputValue} onChange={e => setInputValue(e.target.value) }/> <button onClick={AddPost}>Create</button>
        <Posts user={user}/>
    </div>
    </div>
  )
}

export default Home