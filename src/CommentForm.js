import React, {useState} from "react";

function CommentForm({birb, id, handleNewComment}){

    const [comment, setComment] = useState('');

    function handleChange(e){
        setComment(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
                fetch(`http://localhost:4000/birbs/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comments: [...birb.comments, comment]
            })
        })
        .then(r => r.json())
        .then(newBirb =>
            handleNewComment(newBirb.comments));
        e.target.reset();
    }

    return <div>
        <form id='comment-form' onSubmit={handleSubmit} >
            <textarea onChange={handleChange} defaultValue='Comment on the Birb'></textarea><br/>
            <button type="submit">HI BIRBIE</button>
        </form>
    </div>
}

export default CommentForm;