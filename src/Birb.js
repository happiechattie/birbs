import React, {useState, useEffect} from "react";
import { v4 as uuid } from "uuid";
import Comment from './Comment.js'
import CommentForm from "./CommentForm.js";

function Birb( {birb} ){

    const {id, name, story, image, likes} = birb;

    const [comments, setComments] = useState(birb.comments);

    const [likeCount, setLikeCount] = useState(birb.likes);

    const [showForm, setShowForm] = useState(false);

    function handleNewComment(newComments){
        setComments(newComments);
        setShowForm(false);
    }

    function handleLike(e){
        fetch(`http://localhost:4000/birbs/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                likes: parseInt(likes + 1)
            })
        })
        .then(r => r.json())
        .then(setLikeCount(likes + 1))
    }

    return (
        <div className='birb'>
            <h2>This is {name}</h2> <div className='likes'><h2>{likeCount}</h2><button onClick={handleLike} className='like-btn'>💖</button></div>
            <h4>{story}</h4>
            <img src={image} /><br/>
            <h3>Comments: </h3><button id='add-comment' onClick={() => setShowForm(!showForm)} >+</button>
            {showForm && (<CommentForm handleNewComment={handleNewComment} birb={birb} id={id} />)}
            <ol>
                {comments.map((comment, index) =>
                    <Comment key={index} comment={comment} />
                )}
            </ol>
        </div>
    )
}

export default Birb;