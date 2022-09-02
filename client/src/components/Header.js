import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import logo from './Logo.svg'

const Header = () => {

    const [open, setOpen] = useState(false)


    return (

        <header className="header-container">
            <div className="header-container-items">
               <a href='/'>
<img src={logo} alt=""/>
               </a>
                <nav className="nav-bar">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/resume">RESUME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
                <div>
                    <div className= {`burger-menu ${open ? 'open' : null}`}  open={open} onClick={() => setOpen(!open)}>
                        <div className="bar-one"></div>
                        <div className="bar-two"></div>
                        <div className="bar-three"></div>
                    </div>
                    <div className={`model ${open ? 'active' : null}`} >
                        <ul >
                            <li onClick={() => setOpen(false)} ><Link to="/">HOME</Link></li>
                            <li onClick={() => setOpen(false)}><Link to="/resume">RESUME</Link></li>
                            <li onClick={() => setOpen(false)}><Link to="/about">ABOUT</Link></li>
                            <li onClick={() => setOpen(false)}><Link to="/contact">CONTACT</Link></li>
                        </ul>
                        {/* <button onClick={() => setOpen(false)}>close</button> */}
                    </div>

                </div>
            </div>
        </header>

    )
}

export default Header;