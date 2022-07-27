import React, { useState } from "react";
import CodeContext from "./CodeContext";


const Codestate = (props) =>{
    const host = "http://localhost:5000";
    const [code, setcode] = useState([]);

    const getCodes = async () =>{
        const response = await fetch(`${host}/api/notes/fetchnotes`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMWEwODU1ZmZlMGQ5YmI5NWZiOTFhIn0sImlhdCI6MTY1NzkwNjc0NH0.nS9RLmcLHa6NwcEj0zDIhbLi_21GN-RxtN77wboFHsk'
            }
          });
          const res = await response.json();
          setcode(res);
        //   console.log(json);
    }
    
    // Save a new code
    const addCode = async (title,description,tag) =>{

        // API CALL
        const response = await fetch(`${host}/api/notes/postnote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMWEwODU1ZmZlMGQ5YmI5NWZiOTFhIn0sImlhdCI6MTY1NzkwNjc0NH0.nS9RLmcLHa6NwcEj0zDIhbLi_21GN-RxtN77wboFHsk'
            },
            body : JSON.stringify({title,description,tag})
          });


        console.log("ADDED A NEW CODE IN DB")
        
    }


    // Delete the saved code
    const deletecode = async (id) =>{
        //API CALL
        console.log('deleting a node in db') 
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMWEwODU1ZmZlMGQ5YmI5NWZiOTFhIn0sImlhdCI6MTY1NzkwNjc0NH0.nS9RLmcLHa6NwcEj0zDIhbLi_21GN-RxtN77wboFHsk'
            },
            // body : JSON.stringify({title,description,tag})
          });
          
        const newcode = code.filter( (c) => {
            return (c._id !== id)
        })
        setcode(newcode)
    }

    // Edit code
    const editCode = async (id,title , description ,tag) =>{
      console.log('Editing a note in db');  
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMWEwODU1ZmZlMGQ5YmI5NWZiOTFhIn0sImlhdCI6MTY1NzkwNjc0NH0.nS9RLmcLHa6NwcEj0zDIhbLi_21GN-RxtN77wboFHsk'
            },
            body : JSON.stringify({title,description,tag})
          });
          const json = await response.json();
          console.log(json);

    }



    return (
        <CodeContext.Provider value={{code,addCode,deletecode,editCode,getCodes}} >
            {props.children}
        </CodeContext.Provider>
    ) 
}



export default Codestate;