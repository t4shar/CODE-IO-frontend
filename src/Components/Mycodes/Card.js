import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Editorpage from '../Home/Editorpage';

function Card({mode,title,code,tag}) {
    const vari = "#include<bits/stdc++.h>\r\nusing namespace std;\r\nint main(){\r\n    cout<<\"HELLO\";\r\n"
    console.log(title);
    const url = 'http://localhost:3000/';
    
  return (
    <div class="card" style={{color : 'white', backgroundColor : '#30363d' , width:'50%' , margin:'2vh auto'}}> 
  <h5 class="card-header" >{title}</h5>
  <div class="card-body" style={{backgroundColor : 'rgb(173, 140, 140)' }}>
    <h5 class="card-title">{tag}</h5>
    <p class="card-text">{code}</p> 
    <img src="/Delete.png" className='deletebuttn' alt="" />
    {/* <span id='Delete'>Delete</span> */}
    <img src="/edit.png" className='editbutton'  alt="edit button"/>

    <span id='uniqueto'>Edit Code</span>
  </div>
</div>
  )
}

export default Card