import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Birb from "./Birb";

function Home(){

    const [birbs, setBirbs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/birbs')
        .then(r => r.json())
        .then(data => setBirbs(data))
    }, [])

    return (
        <div><h1 id='title'>BIRBS</h1>
        {birbs.reverse().map(birb =>
            <Birb key={uuid()} birb={birb} />
        )}</div>
    )
}

export default Home;