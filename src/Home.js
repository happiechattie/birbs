import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Birb from "./Birb";

function Home({birbs}){

    const [birbToSearch, setBirbToSearch] = useState('');


    function handleChange(e){
        setBirbToSearch(e.target.value);
    }

    const birbsToDisplay = birbs.filter(birb => {
        if (birbToSearch === '') return true;
        else {return (birb.name.toUpperCase().includes(birbToSearch.toUpperCase()))}
    })

    return (
        <div><h1 id='title'>BIRBS</h1>
        <div className='form-container'><input type="text" onChange={handleChange} defaultValue="Where art thou, sweet birbie?"></input></div><br></br>
        {birbsToDisplay.map(birb =>
            <Birb key={uuid()} birb={birb} />
        )}</div>
    )
}

export default Home;