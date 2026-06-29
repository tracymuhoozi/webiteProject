import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h2>Stratcom</h2>
          <p>Delivering innovative ICT solutions, software development, networking, cyber security and didgital transformation services</p>

        </div>
        <div className='footer-section'>
          <h3>Quick links</h3>
          <a href="/">Home</a>
          <a href="/aboutus">Aboutus</a>
          <a href="/services">Services</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>

        </div>
        <div className='footer-section'>
          <h3>Contact us</h3>
          <p> Kampala Uganda</p>
          <p> 📞 Tel:+256 100 7001234</p>
          <p> @ info@stratcom.com</p>

        </div>
      </div>
      <hr/>
      <p className='copyright'>
          2026 stratcom. All Rights Reserved
        </p>

    </footer>
    
  );
}

export default Footer;