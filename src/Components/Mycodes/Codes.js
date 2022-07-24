import React, { useState } from 'react'
import Card from './Card'

function Codes() {
    const [mode, setmode] = useState('dark')
    const [title, settitle] = useState('My first program')
    const [code, setcode] = useState('thisshhbhshhhxxo\n jdkkdkkdkdkk \n jjdjdjdjjd \n jddjj')
    const [tag, settag] = useState('C++')
  return (
    <div className="container">
        <Card mode={mode} code={code} tag={tag} title={title}/>
        <Card mode={mode} code={code} tag={tag} title={title}/>
        <Card mode={mode} code={code} tag={tag} title={title}/>
        <Card mode={mode} code={code} tag={tag} title={title}/>
        <Card mode={mode} code={code} tag={tag} title={title}/>
        <Card mode={mode} code={code} tag={tag} title={title}/>

    </div>
  )
}

export default Codes