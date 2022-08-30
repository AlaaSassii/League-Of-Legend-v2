import React ,{ useEffect ,useState} from 'react'
import { collection , getDocs ,  doc , updateDoc  } from 'firebase/firestore';
import { database } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import Post from './Post';

const Posts = ({user}) => {
    const PostCollectionRef = collection(database , 'posts') ; 

    const [posts,setPosts] = useState([]) ; 
    const [loading ,setLoading] = useState(false) ; 

    // navigation 
    console.log('FROM POSTSS COOMPP ',posts)
    useEffect(()=>{
        setLoading(true)
        const getPosts = async () => { 
            const newData = await getDocs(PostCollectionRef) ; 
            setPosts(newData.docs.map(post => ({...post.data() , ID: post.id }) ).reverse()) ; 
            setLoading(false)
        }
        getPosts() ; 
    },[])

    if (loading) return <h1>Loading..</h1>
  return (
    <div>
        {   
          posts.length > 0 ?
            posts.map(singlePost =>{
              const {userName , post , email , image , comments,likes ,  time , ID , commentsText ,likesUsername , id , postId} = singlePost ; 
              return(
              <Post  image={image} userName={userName} post={post} email={email} time={time} comments={comments} commentsText={commentsText} likes={likes} id={id}  user={user}  ID={ID} likesUsername={likesUsername} postId={postId }/>
              )}
              ) :
              <h1>No Data..</h1>
          }
    </div>
  )
}

export default Posts