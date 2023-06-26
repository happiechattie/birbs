import React from "react"
import Birb from "./Birb";

function Random({ birbs }){

    const randomInt = Math.floor(Math.random() * birbs.length);
    const rBirb = birbs[randomInt];

    return (<div><Birb birb={rBirb} /></div>)
}

export default Random;