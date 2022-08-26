import React, { useState } from 'react'
import { collection , getDocs ,  doc , updateDoc  } from 'firebase/firestore';
import { database } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Post = ({userName ,email , image , time , post ,user , comments , likes , commentsText , id ,likesUsername }) => {
    const postId = id ; 
    const {Ref} = user
    const [commentInput ,setComment] = useState('') ; 
    let navigate = useNavigate()
    const username = userName ; 
    function toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
    console.log('time',toDateTime(time.seconds))
    const addComment = async (id)=>{
        const userDoc = doc(database, "posts", id);
        const newFields = { userName:user.userName,comment:commentInput , image:user.image };
        await updateDoc(userDoc,{commentsText:[...commentsText , newFields],comments:comments + 1});
    }
    const Like = async (id) => {
        const userDoc = doc(database , 'posts',id) 
        await updateDoc(userDoc,{likesUsername:[...likesUsername ,userName ],likes:likes + 1  }) ; 
    }
  return (
    <div className="post">
        
         <div className="info">
            <div className="image">
                <img src={image} alt="image"/>
            </div>
            <div className="text">
                <h3>{userName}</h3>
                <h6>{email}</h6>
                <h6>{toDateTime(time.seconds).toString()}</h6>
            </div>
        </div>
        <div className="post-text" onClick={()=>{
            navigate(`/Home/${Ref}/${postId}`) ; 
        }}>
           {post}
        </div>
        <div className="interaction">
            <button>{likes} {'  '}Like</button>
            <button>{comments}{'  '}Comments</button>
        </div>
        <div className='comment-section'>
            <div className='image-comment'>
                <img src={user.image} alt="" />
            </div>
            <input onChange={(e)=> setComment(e.target.value)} type="text" placeholder='comment' />
            <button onClick={()=>addComment(id)}>add</button>
            <button  onClick={()=>Like(id)} style={{marginLeft:'5px'}}>Like</button>
        </div>
        <div>{
            
            commentsText.slice(0,2).map(com => {
                const {comment , image ,  userName} = com
                return <div className='singleComment'>
                    <div>
                        <h6>{userName}</h6>
                        <img src={image} alt="" />
                    </div>
                    <p>{comment}</p>
                </div>
            })}
            {
                commentsText.length > 2 && <a href=''>Look at all the comments</a>
            }
            </div>
    </div>
  )
}

export default Post