import React , {useEffect, useState} from 'react'
import { database } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Post from './Post'
const AccountPosts = ({ id}) => {
    const  postsCollectionRef = collection(database , 'posts') 
    const [posts, setPosts] = useState([])  ;
    const [loading ,setLoading] = useState(true)
    console.log(posts)
    useEffect(()=>{
        const getPosts = async () => {
            setLoading(true) ;  
            const posts1  = await getDocs(postsCollectionRef) ; 
            setPosts(posts1.docs.map(post => ({...post.data()}))) ; 
            setPosts(posts => posts.filter(post => post.id === id)) ; 
            setLoading(false) ; 
        }   
        getPosts() ; 
    },[])
    function toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
if (loading) return <h1>Loading..</h1>
  return (
    <div>
        {
            posts.map((post1,index ) =>
                {
                    const {userName , image,time , email , post , likes , comments} = post1 
                    return <div className="post">
                        <div className="image">
                <img src={image} alt="image"/>
            </div>
            <div className="text">
                <h3>{userName}</h3>
                <h6>{email}</h6>
                <h6>{toDateTime(time.seconds).toString().toString().slice(0,21)}</h6>
            </div>
            <div className="post-text">
            {post}
            </div>
            <div className="interaction">
            <button>{likes} {'  '}Like</button>
            <button>{comments}{'  '}Comments</button>
        </div>
                    </div>

                }
           )
        }
    </div>
  )
}

export default AccountPosts