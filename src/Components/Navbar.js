import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink,Link} from 'react-router-dom'
function navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/Port" end>Portfolio</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
                <li><NavLink to="/News">News</NavLink></li>
                <li className='SignUp'><NavLink to="/Signup">Sign Up</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar
