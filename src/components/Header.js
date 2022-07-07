import React from 'react';
import {  Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return(
      
        <header className="header-container">
        <div className="header-container-items">
            <h1>Logo</h1>
            <nav className="nav-bar">
                <ul>
                    <li><Link  to="/">HOME</Link></li>
                    <li><Link to="/resume">RESUME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>

            </nav>
        </div>
    </header>
    
    )
} 

export default Header;