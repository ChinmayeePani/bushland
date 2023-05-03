import React from 'react'
import { BsFingerprint } from "react-icons/bs";

const Login = () => {
  return (
    <div className='login_page'>
      <div><img src='./Image/bg3.jpg' className='bg3'/></div>
      
      <div className='card'>
<BsFingerprint className='fingerprint'/>
         <form className='form'>
          <label>Your Name:
            <input type='text' placeholder='Type your name' className='input'/>
          </label>

          <label>Your Email Address:
            <input type='text' placeholder='Type your email' className='input'/>
          </label>

          <label>Password:
            <input type='password' placeholder='Type your password' className='input'/>
          </label>
          <div >
            <button className='btn1'>Sign Up</button>
          </div>
         </form>
      </div>
    </div>
  )
}

export default Login
