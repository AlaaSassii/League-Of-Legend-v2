import React ,{ useEffect ,useState} from 'react'
import { collection , getDocs , addDoc } from 'firebase/firestore';
import { database } from '../firebase-config';
import Post from './Post';

const Posts = () => {
    const PostCollectionRef = collection(database , 'posts') ; 

    const [posts,setPosts] = useState([]) ; 
    const [loading ,setLoading] = useState(false) ; 
    console.log(posts)
    useEffect(()=>{
        setLoading(true)
        const getPosts = async () => { 
            const newData = await getDocs(PostCollectionRef) ; 
            setPosts(newData.docs.map(user => user.data() )) ; 
            setLoading(false)
        }
        getPosts() ; 
    },[])
    if (loading) return <h1>Loading..</h1>
  return (
    <div>
        {
            posts.map(singlePost =>{
              const {Ref , email , image , name , passowrd , post  , time , userName} = singlePost ; 
              return(<Post data={{Ref , email , image , name , passowrd , post  , time , userName}}/>)}
              )
          }
    </div>
  )
}

export default Posts