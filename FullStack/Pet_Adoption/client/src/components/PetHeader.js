import React from 'react';
import { NavLink } from 'react-router-dom';
import './PetHeader.css'
function Header() {
return (
<header>
    <h1>Ryan's Pet Adoptions </h1>
    <h4 className = "furry-friends">Where all our furry friends can find a home</h4>
    <NavLink className="nav-link" to="/">
    Home
    </NavLink>
    <span> | </span>
    <NavLink className="nav-link" to="/new">
    List a new pet for adoption! 
    </NavLink>
</header>
);
}

export default Header;