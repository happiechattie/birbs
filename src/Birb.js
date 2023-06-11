import React, {useState, useEffect} from "react";
import { v4 as uuid } from "uuid";
import Comment from './Comment.js'
import CommentForm from "./CommentForm.js";

function Birb( {birb} ){

    const {id, name, story, image, likes} = birb;

    const [comments, setComments] = useState([]);

    const [likeCount, setLikeCount] = useState(birb.likes);

    const [showForm, setShowForm] = useState(false);

    function handleNewComment(newComment){
        setComments([...comments, newComment])
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


    useEffect(() => {
        fetch('http://localhost:4000/birbs/' + id)
        .then(r => r.json())
        .then(data => {setComments(data.comments)
            setLikeCount(data.likes)})
    }, [birb])

    return (
        <div class='birb'>
            <h2>This is {name}</h2> <div class='likes'><h2>{likeCount}</h2><button onClick={handleLike} class='like-btn'>💖</button></div>
            <h4>{story}</h4>
            <img src={image} /><br/>
            <h3>Comments: </h3><button id='add-comment' onClick={() => setShowForm(!showForm)} >+</button>
            {showForm && (<CommentForm handleNewComment={handleNewComment} birb={birb} id={id} />)}
            <ol>
                {comments.reverse().map(comment =>
                    <Comment key={uuid()} comment={comment} />
                )}
            </ol>
        </div>
    )
}

export default Birb;