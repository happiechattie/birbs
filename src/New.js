import React, {useState} from "react"
import Birb from "./Birb";

function New(props){

    const [submitted, setSubmitted] = useState(false);

    const [birbData, setBirbData] = useState({
        name: '',
        story: '',
        image: '',
        likes: 0,
        comments: []
    });

    function handleChange(e){
        setBirbData({
            ...birbData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:4000/birbs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: birbData.name,
                story: birbData.story,
                image: birbData.image,
                likes: 0,
                comments: [],
            })
        })
        .then(r => r.json())
        .then(setSubmitted(true))
        .then(props.handleNew(birbData))
        e.target.reset();
    }

    return (<div><div className='form-container'>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' name="name" defaultValue='Name the Birb' id='nameInput' /><br />
            <textarea onChange={handleChange} name='story' defaultValue='Story of the Birb' id='storyInput' /><br />
            <input onChange={handleChange} type='text' name='image' defaultValue='Image URL of Birb' id='imgInput' /><br />
            <button type='submit' id='submit-btn'>FLY BIRBIE FLY!</button>
        </form>
    </div>
    {submitted && (<div id='newBirb'><h1>SUBMITTED</h1>
    <h2>Say hello to {birbData.name}</h2><br></br>
    <img src={birbData.image}/></div>)}</div>)
}

export default New;