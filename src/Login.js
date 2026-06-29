import React from 'react'
import "./Login.css";
import { Link} from "react-router-dom";


function Login() {
  return (
    <div className='login-page'>
      <div className='login-left'>
        <div className='overlay'>
          <h1>Welcome Back!</h1>
          <p>
            Securely Access your Stratcom Account and continue exploring innovative technology solutions
          </p>

        </div>

      </div>
      <div className='login-right'>
        <div className='login-card'>
          <h2>Login</h2>

          <form>
            <div className='input-group'>
              <label>Email Address</label>
              <input type='email' placeholder='Enter your email'/>

            </div>

            <div className='input-group'>
              <label>Password</label>
              <input type='password' placeholder='Enter your password'/>

            </div>

            <div className='options'>
              <label>
                <input type='checkbox'/>
                Remember me
              </label>
              <a href="/">Forgot password</a>

            </div>
            <button>Login</button>
          </form>
          <p className='Signup-link'> Dont have an account
            <Link to ="/signup">Signup</Link>
          </p>

        </div>

      </div>
      

    </div>
  )
}

export default Login