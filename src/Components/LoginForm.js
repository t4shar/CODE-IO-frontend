import React, { useState } from 'react'
import {Link , useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
function LoginForm() {
  const host = "http://localhost:5000";
  let navigate = useNavigate();
  const [username, setusername] = useState();
  const [pass, setpass] = useState()

  const handleupsubmit = async (event) =>{
    event.preventDefault();
    const email =username;
    const password = pass;
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({email,password })
    });
    const json = await response.json()
    if(json.success){
        toast.success('Successfully Login')
        localStorage.setItem('token',json.auth_token)
        navigate('/')
    }else{
      toast.error(json.error,
  {
    icon: '🥲',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
    }
  }
  return (
    <div className="homepagewrapper">
      <Toaster position="top-center"
  reverseOrder={false} />
        <div className="formwrapper">
            <img src="/login-logo.png" alt="logo" className='logo'/>
            <h4 id='one'>Please enter login id</h4>
            <div className="inputgroup">
                
            <input type="email" className='inputbox' name="Username" placeholder='Username'   required minLength={8} onChange = { (e)=>{setusername(e.target.value)} } id="" />
            <input type="password" className='inputbox' name="Username" placeholder='Password' required minLength={8} onChange={ (e)=>{ setpass(e.target.value) } } id="" />
            <button className='btn loginbutton my'  onClick={handleupsubmit}>Login</button>
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