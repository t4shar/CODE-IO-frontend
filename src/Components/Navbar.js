import React from 'react'

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-dark bg-color ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      &nbsp; CODE<span>~</span>IO
    </a>
    <div class="d-flex flex-row-reverse bd-highlight">
  <button class="p-2 btn btn-primary mx-3">Logout</button>
  <button class="p-2 btn btn-primary mx-3">Saved Codes</button>
  
</div>
  </div>
</nav>
    </>
  )
}

export default Navbar