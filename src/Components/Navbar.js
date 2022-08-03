import React from "react";
import {NavLink , useLocation } from 'react-router-dom'

// import { ToastContainer, toast } from 'react-toastify';

function Navbar({logintrue}) {
  let classses = "btn btn-primary mx-3";
  const location = useLocation();
  const style = {
    display : 'none'
  }
  const style2 = {
    display : 'unset'
  }

  const handeleuplogout = () =>{ 
    localStorage.removeItem('token')
   location.reload();
   }

  return (
    
    <>
      <nav className="navbar navbar-dark bg-color ">
        <div className="container-fluid">
          <NavLink className="navbar-brand styled"  to="/">
            <img
              src="/logo.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            &nbsp; CODE<span className="spani">~</span>IO
          </NavLink>
          {/* <NavLink className="styled">
            Editor
          </NavLink> */}
          <div>
            <NavLink to="/login" className=" btn btn-primary mx-3" id="btn1" style={ localStorage.getItem('token') !== null ? style : style2 } >Login / Signup</NavLink>
            <NavLink to="/mycodes" className=" btn btn-primary mx-3" id="btn2">Mycodes</NavLink>
            <NavLink to="/" className=" btn btn-primary mx-3" id="btn3" style={ localStorage.getItem('token') !== null ? style2 : style } onClick={ handeleuplogout } >LogOut</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
