import React from 'react'
import Navbar from '../Navbar'
import Editor from './Editor'
function Editorpage() {
  return (
    <>
    <Navbar/>
    <div  style={{color : "white"}} class=" center
      row row-cols-2">
    <div  class="col bg-white editorgp">
        <Editor/>
    </div>
    <div class="col">Column</div>
  </div>
        </>
  )
}

export default Editorpage