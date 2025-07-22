import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signstate,setSignState]=useState("sign in")
  return (
    <div className='login'>
      <img src={logo} className="login-logo" alt="" />
      <div className='login-form'> 
        <h1>{signstate}</h1>
        <form>{signstate==="sign up"?<input type='text' placeholder='Your name'/>:<></>}
          
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>{signstate}</button>
          <div className="form-help">
            <div className='remember'>
              <input type='checkbox'/>
              <label htmlFor=''>Remember me</label>
            </div>
            <p>Need help?</p>

          </div>
        </form>
        <div className="form-switch">
          {signstate==="sign in"?<p> New to Netflix? <span onClick={()=>{setSignState("sign up")}}>Sign Up Now</span></p>: <p>Already have account?<span onClick={()=>{setSignState("sign in")}}>Sign in now</span></p>}
          
         
        </div>
      </div>
    </div>
  )
}

export default Login
