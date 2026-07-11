// import React from 'react'
import "./Login.css";
import { Link} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import {auth,signInWithEmailAndPassword,updateProfile } from './firebase'
import { useNavigate } from 'react-router-dom'


function Login() {
//javascript code runs here
  const[email, setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[username, setuserName]=useState('')
  const[error,SetError]=useState('')
  const[loading,setLoading]=useState(false)
  const navigate =useNavigate()

  console.log(email)
  console.log(password)


  const loginUser = async(e)=>{
    e.preventDefault()
    SetError('')
    setLoading(true)

    try{
      await signInWithEmailAndPassword(auth,email,password)
      navigate('/apply')
      }catch(err){
        switch(err.code){
            case 'auth/user-not-found':

              SetError('User Not Found')
              break;
            case 'auth/invalid-email':
              SetError('Invalid email in Use')
              break;
            case 'auth/weak-password':
                SetError('Password is too Weak , use a stronger password')
                break;
                default:
                  SetError('Login Failed, Try Again')
        }
    }finally{
      setLoading(false)
    }

     }

  return (
    <div className='login-page'>
      <div className='login-left'>
        <div className='overlay'>
          <h1>Welcome Back!</h1>
          <p>
            Sign in to access your account, manage your savings, apply for loans, and stay connected with your financial journey.
          </p>

        </div>

      </div>
      <div className='login-right'>
        <div className='login-card'>
          <h2>Login</h2>

          <form onSubmit={loginUser}>
            <div className='input-group'>
              <label>Email Address</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter your email'/>

            </div>

            <div className='input-group'>
              <label>Password</label>
              <input  value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your password'/>

            </div>

            <div className='options'>
              <label>
                <input type='checkbox'/>
                Remember me
              </label>
              <a href="/">Forgot password</a>

            </div>
            <button type="submit"
            className="login-button"
            disabled={loading}
            >{loading ? "Logging in..." : "login"}</button>
          </form>
          <p className='signup-link'> Dont have an account
            <Link to ="/signup">Signup</Link>
          </p>

        </div>

      </div>
      

    </div>
  )
}

export default Login