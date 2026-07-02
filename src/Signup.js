import React from 'react'
import "./Signup.css";

function Signup() {
  return (
    <div className='signup-page'>
      <div className='signup-card'>
        <div className='signup-header'>
          {/* <span className='signup-brand'>Stratcom</span> */}
          <span className='signup-brand'><a href='/'>Stratcom</a></span>
          <h2>Welcome to Stratcom</h2>
          <p>Sign up to continue.....</p>

        </div>
        <form className='signup-form'>
          <div className='signup-form-group'>

            <label className='label'>Enter your Username</label>
            <input type='username' placeholder='e.g username'/>

            <label className='label'>Enter your Email Address</label>
            <input type='email' placeholder='e.g tom@gmail.com'/>

            <label className='label'>Enter your Password</label>
            <input type='password' placeholder='*********'/>
          </div>

          <button className='signup-button'>Signup</button>


        </form>
        <p className='signup-switch'>Already have an account
          <a href='Login'>Login</a>
        </p>
      </div>

        

    </div>
  )
}

export default Signup