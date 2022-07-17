import React from 'react'
import {Link} from 'react-router-dom'
function LoginForm() {
  return (
    <div className="homepagewrapper">
        <div className="formwrapper">
            <img src="/login-logo.png" alt="logo" className='logo'/>
            <h4 id='one'>Please enter login id</h4>
            <div className="inputgroup">
                
            <input type="text" className='inputbox' name="Username" placeholder='Username' id="" />
            <input type="text" className='inputbox' name="Username" placeholder='Password' id="" />
            <button className='btn loginbutton my'>Login</button>
            </div>
            <div className='center'>----------OR----------</div>
            <div className='logininfo'>
                Create New Account
                <Link className='btn loginbutton mx' to='/signup'>Sign up</Link>
            </div>
        </div>
        <footer>
            <h4>Build by Tushar Codes 💚</h4>
        </footer>
    </div>

  )
}

export default LoginForm