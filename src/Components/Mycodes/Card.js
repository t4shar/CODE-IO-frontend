import React, { useContext } from 'react'
import CodeContext from '../../Context/Codes/CodeContext';

function Card({title,description,tag,id , updatecode}) {
  const a = useContext(CodeContext);
  const {deletecode} = a;
  const handleupclick = () =>{
    deletecode(id);
  }
  const handleupedit = () =>{
    updatecode(id,title,description,tag)
  }
    // const vari = "#include<bits/stdc++.h>\r\nusing namespace std;\r\nint main(){\r\n    cout<<\"HELLO\";\r\n"
    // // console.log(title);
    // const url = 'http://localhost:3000/';
    
  return (
    <div className="card" style={{color : 'white', backgroundColor : '#30363d' , width:'50%' , margin:'2vh auto'}}> 
  <h5 className="card-header" >{title}</h5>
  <div className="card-body" style={{backgroundColor : 'rgb(173, 140, 140)' }}>
    <h5 className="card-title">{tag}</h5>
    <p className="card-text">{description}</p> 
    {/* <img src="/Delete.png" className='deletebuttn' alt="" onClick={deletecode(id)} /> */}
    <button className='btn btn-danger mx-3' onClick={handleupclick}>Delete</button>
    {/* <span id='Delete'>Delete</span> */}
    <img src="/edit.png" className='editbutton'  alt="edit button" onClick={handleupedit}/>

    <span id='uniqueto'>Edit</span>
  </div>
</div>
  )
}

export default Card