import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
       <nav>
        <h1>where the heArt is</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/gallery'>My Gallery</NavLink>
       </nav>
    )
}

export default Navbar