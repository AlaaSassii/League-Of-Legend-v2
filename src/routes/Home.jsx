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
    const [user , setUser] = useState('') ;  
    const [inputValue , setInputValue] = useState('') ; 
    console.log(user)
    const {id } = useParams() ; 
    useEffect(() => {
        const getUser = async () => { 
            const newData = await getDocs(usersCollectionRef) ; 
            const accounts = newData.docs.map(user => user.data() ) ; 
            setUser(accounts.find(account => account.Ref == id)) ; 
        }
        getUser() ; 
    }, []) ; 
   
    // functions 
    const AddPost = async () => { 
        const Time = new Date()
        await addDoc(PostCollectionRef, {...user ,post:inputValue , time:Time });

    }
  return (
    <div className='container' style={{margin:'auto'}}>
        <input type="text" placeholder='Add a Post' value={inputValue} onChange={e => setInputValue(e.target.value) }/> <button onClick={AddPost}>Create</button>
        <Posts/>
    </div>
  )
}

export default Home