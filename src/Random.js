import React, { useState, useEffect } from "react"
import Birb from "./Birb";

function Random({ birbs, updatedBirb }){

    const [birb, setBirb] = useState(birbs[Math.floor(Math.random() * birbs.length)]);

    console.log(birb);

    useEffect(() => {
        fetch(`http://localhost:4000/birbs/${birb.id}`)
        .then(r => r.json())
        .then(newBirb => {setBirb(newBirb)})    
    }, [birb])

    return (<div><Birb birb={birb} updatedBirb={updatedBirb} /></div>)
}

export default Random;