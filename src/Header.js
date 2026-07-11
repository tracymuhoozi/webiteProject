// import React from 'react'
import './Header.css'
// import logo from './assets/aoetLogo.png'; 
// import logo from "./assets/stratcomlogo.png";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Header() {
    const[menuOpen, setMenuOpen] = useState(false);
    return (
    <header className='header'>
        <div className='container headercontainer'>
        <div className='logo'>
            <img src='/images/shineup.png' alt="stratcomlogo" className="stratcomlogo" />
            <div className='brand'>
                <span className='logotext'>ShineUP</span>

                <span className='logotext2'>Empowering Your Financial Future.</span>

            </div>
            
        </div>

        <button
    className="hamburger"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? "✖" : "☰"}
</button>

        
        {/* <nav className='navmenu'> */}
        <nav className={`navmenu ${menuOpen ? "active" : ""}`}>    
        <ul className='navlist'>
            <li className="navitem">
    <Link className="navlink" to="/"  onClick={() => setMenuOpen(false)}>
        Home
    </Link>
</li>
            <li className='navitem'>
                <Link className='navlink' to='/aboutus'  onClick={() => setMenuOpen(false)}>Aboutus</Link>
            </li>
            <li className='navitem'>
                <Link className='navlink' to='/services'  onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li className='navitem'><Link className='navlink' to='/founders'  onClick={() => setMenuOpen(false)}>Founders</Link> </li>
            <li className='navitem'><Link className='navlink' to='/contactus'  onClick={() => setMenuOpen(false)}>Contactus</Link> </li>
            <li className="navitem">
    <Link className="login-btn" to="/login">
        Login
    </Link>
</li>

<li className="navitem">
    <Link className="signup-btn" to="/signup">
        Sign Up
    </Link>
</li>
    
        </ul>
    </nav>
        </div>

    </header>
)
}

export default Header