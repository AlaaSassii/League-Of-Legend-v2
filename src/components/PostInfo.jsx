import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../firebase-config';
import { collection, getDocs   } from 'firebase/firestore';

const PostInfo = () => {
    const [post ,setPost] = useState('') ; 
    console.log(post)
    const {postId} = useParams() ;
    const postsCollectionRef = collection(database , 'posts') ; 
    useEffect(()=>{
        const post = async () => {  
            const newData = await getDocs(postsCollectionRef) ; 
            setPost(newData.docs.find(post => post.id === postId ).data())
        }
        post() ; 
    },[]) ; 
  return (
    <div>{postId}</div>
  )
}

export default PostInfo