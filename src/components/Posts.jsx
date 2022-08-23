import React ,{ useEffect ,useState} from 'react'
import { collection , getDocs , addDoc } from 'firebase/firestore';
import { database } from '../firebase-config';

const Posts = () => {
    const PostCollectionRef = collection(database , 'posts') ; 

    const [posts,setPosts] = useState([]) ; 
    console.log(posts)
    useEffect(()=>{
        const getPosts = async () => { 
            const newData = await getDocs(PostCollectionRef) ; 
            setPosts(newData.docs.map(user => user.data() )) ; 
        }
        getPosts() ; 
    },[])
  return (
    <div>
        
    </div>
  )
}

export default Posts