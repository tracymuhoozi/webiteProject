// import React from 'react'
import "./Signup.css";
import React,{useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate} from "react-router-dom"
import {auth,createUserWithEmailAndPassword, updateProfile} from './firebase'

function Signup() {

  //javascript code runs here

  const[email, setEmail]=useState('')  
  const[password, setPassword]=useState('')
  const[username, setUsername]=useState('')
  const[error, SetError]=useState('')
  const[loading, setLoading]=useState(false)
  const navigate =useNavigate()  

  console.log(username)
  console.log(password)
  console.log(email)

  //function to create user account

  const createUser = async(e)=>{
    e.preventDefault()
    SetError('')

    if(password.length < 8){
      SetError('password must be atleast 8 characters')
      return;
    }
    setLoading(true)
    console.log('btn clicked')

    try{
      const userCredential=await createUserWithEmailAndPassword(auth,email,password)
      const user=userCredential.user;
      await updateProfile(user,{displayName:username})
      alert('User has been created successfully')
      navigate('/apply')
    } catch(err){
      switch(err.code){
        case 'auth/emeil-already-in -use':void
        SetError('Email already exists')

        break;
        case 'auth/invalid-email':
          SetError('Invalid email')
          break;
          case 'auth/weak-password':
            SetError('Use Stronger password')
            break;
            default:
              SetError('Signup failed. try again')

      }

    } finally{
      setLoading(false)
    }
  }
  return (
    <div className='signup-page'>
      <div className='signup-card'>
        <div className='signup-header'>
          {/* <span className='signup-brand'>Stratcom</span> */}
          <span className='signup-brand'><a href='/'>ShineUp</a></span>
          <h2>Welcome to ShineUP</h2>
          <p>Sign up to continue.....</p>
          {error && <p className="signup-error">{error}</p>}

        </div>
        <form className='signup-form' onSubmit={createUser}>
          <div className='signup-form-group'>

            <label className='label'>Enter your Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type='username' placeholder='e.g username'/>

            <label className='label'>Enter your Email Address</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='e.g tom@gmail.com'/>

            <label className='label'>Enter your Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='*********'/>
          </div>

          <button type='submit' className='signup-button' disabled={loading}>Signup</button>


        </form>
        <p className='signup-switch'>Already have an account
          <Link to="/Login">Login</Link>
        </p>
      </div>

        

    </div>
  )
}

export default Signup