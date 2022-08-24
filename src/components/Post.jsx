import React from 'react'

const Post = ({data}) => {
    console.log(data)
  return (
    <div className="post">
        <div className="info">
            <div className="image">
                <img src={image} alt="image"/>
            </div>
            <div className="text">
                <h3>{name}</h3>
                <h6>{email}</h6>
                <p>{time}</p>
            </div>
        </div>
        <div className="post-text">
           {post}
        </div>
        <div className="interaction">
            <div>Like</div>
            <div>Comment</div>
        </div>
    </div>
  )
}

export default Post