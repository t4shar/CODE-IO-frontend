import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

import toast, { Toaster } from 'react-hot-toast';
function SignupForm(){
  const host = "http://localhost:5000";

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [confm, setconfm] = useState()

  const navigate = useNavigate();

  const handleupsubmit = async () =>{
    if(confm !== password) return toast.error('Both Passwords are Different')

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({name, email,password })
    });

    const json = await response.json();
    console.log(json.success)
    if(json.valierror === 'true'){
      json.error.map( (e)=>{
        toast.error(e.msg,{
          icon: '🥲',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        
        })
      } )
    }
    else if(json.success === 'true'){
      localStorage.setItem('token',json.auth_token)
      toast.success('Success');
      navigate('/')
    }else{
      toast.error(json.message,
        {
          icon: '🥲',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
    }
    console.log(json)
  }

  return (
    <div className="homepagewrapper">
      <Toaster position="top-center"
  reverseOrder={false} />
        <div className="formwrapper">
            <img src="/login-logo.png" alt="logo" className='logo'/>
            <h4 id='one'>Please enter login id</h4>
            <div className="inputgroup">
                
            <input type="name" className='inputbox' name="Username" placeholder='Name' id="" onChange={ (e)=>{setname(e.target.value)} } required minLength={3} />
            <input type="email" className='inputbox' name="Username" placeholder='Email' id="" onChange={ (e)=>{setemail(e.target.value)} } required minLength={7} />
            <input type="password" className='inputbox' name="Username" placeholder='Password' id="" onChange={ (e)=>{setpassword(e.target.value)} } required minLength={8} />
            <input type="password" className='inputbox' name="Username" placeholder='Confirm Password'onChange={ (e)=>{setconfm(e.target.value)}} id="first"  required minLength={8} />
            <button className='btn loginbutton my' onClick={handleupsubmit}>Sign up</button>
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