import React from 'react'
import {Link} from 'react-router-dom'
function SignupForm() {
  return (
    <div className="homepagewrapper">
        <div className="formwrapper">
            <img src="/login-logo.png" alt="logo" className='logo'/>
            <h4 id='one'>Please enter login id</h4>
            <div className="inputgroup">
                
            <input type="text" className='inputbox' name="Username" placeholder='Name' id="" />
            <input type="text" className='inputbox' name="Username" placeholder='Email' id="" />
            <input type="password" className='inputbox' name="Username" placeholder='Password' id="" />
            <input type="password" className='inputbox' name="Username" placeholder='Confirm Password' id="" />
            <button className='btn loginbutton my' >Sign up</button>
            </div>
            <div className='center'>----------OR----------</div>
            <div className='logininfo'>
                Have a Account
                <Link className='btn loginbutton mx' to='/'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default SignupForm