import React from "react";
import {NavLink } from 'react-router-dom'

// import { ToastContainer, toast } from 'react-toastify';

function Navbar({logintrue}) {
  
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
            <NavLink to="/login" className=" btn btn-primary mx-3">Login / Signup</NavLink>
            <NavLink to="/mycodes" className=" btn btn-primary mx-3">Mycodes</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
