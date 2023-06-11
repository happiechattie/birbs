import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return <div className='navbar'>
        <NavLink class='link' to='/'>Home</NavLink>
        <NavLink class='link' to='/new'>New Birb</NavLink>
        <NavLink class='link' to='/search'>Birb Search</NavLink>
        <NavLink class='link' to='/birb'>Random Birb</NavLink>
    </div>
}

export default NavBar;