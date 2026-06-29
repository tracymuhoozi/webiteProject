import React from 'react'
import './Header.css'
// import logo from './assets/aoetLogo.png'; 
// import logo from "./assets/stratcomlogo.png";


function Header() {
    return (
    <header className='header'>
        <div className='container headercontainer'>
        <div className='logo'>
            <img src='/images/stratcomlogo.png' alt="stratcomlogo" className="stratcomlogo" />
            <div className='brand'>
                <span className='logotext'>Stratcom Uganda</span>

                <span className='logotext2'>Action For Empowerment</span>

            </div>
            
        </div>
        <nav className='navmenu'>
        <ul className='navlist'>
            <li className='navitem'><a className='navlink' href='/'>Home</a> </li>
            <li className='navitem'><a className='navlink' href='/aboutus'>Aboutus</a> </li>
            <li className='navitem'><a className='navlink' href='/services'>Services</a> </li>
            <li className='navitem'><a className='navlink' href='/login'>Login</a> </li>
            <li className='navitem'><a className='navlink' href='/signup'>SignUp</a> </li>
    
        </ul>
    </nav>
        </div>

    </header>
)
}

export default Header