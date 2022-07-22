import React from "react";
import {NavLink , Link} from 'react-router-dom'
function Navbar({logitrue}) {
  var temp_var = "p-2 btn btn-info mx-3";
  // if(logitrue  == true) temp_var+=" disabled"
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
          <div className="d-flex flex-row-reverse bd-highlight">
            <NavLink to="/" className={temp_var}>Logout</NavLink>
            <NavLink to="/mycodes" className={temp_var}>Mycodes</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
