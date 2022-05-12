import React from 'react'
import {NavLink} from 'react-router-dom'; // gives free active class 
import './Header.css';
function Header() {
return (
    <header>
        <h1>Movies App</h1>
        <NavLink className = "nav-link" to='/'>
            Home
        </NavLink>
        <span>|</span> 
        {/* Span is a inline element that does not take up whole like like div does */}
        <NavLink className = "nav-link" to='/new'>
            Add a New Movie
        </NavLink>
    </header>
)
}

export default Header