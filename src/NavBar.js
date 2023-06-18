import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return <div className='navbar'>
        <NavLink className='link' to='/'>Home</NavLink>
        <NavLink className='link' to='/new'>New Birb</NavLink>
        <NavLink className='link' to='/birb'>Random Birb</NavLink>
    </div>
}

export default NavBar;