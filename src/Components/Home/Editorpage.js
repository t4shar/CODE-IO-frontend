import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import Editor from "@monaco-editor/react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button  from 'react-bootstrap/Button';

function Editorpage() {
  const [setcodemark, setsetcodemark] = useState("//Write your code below");
  const [langval, setlangval] = useState("langauge");
  const editorref = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorref.current = editor;
  };
  const handleuplang = (e)=>{
    setlangval(e);
    console.log(langval)
  }
  const handleupsave = () => {
    console.log(editorref.current.getValue());
  };
  return (
    <>
      <Navbar langval={langval} setlangval={setlangval} />
      <div className="editorpagewrapper">
        <div class=" row row-cols-2">
          <div class="col editorgp">
            <div className="row row-cols-2">
            <div className="col">

          <DropdownButton id="dropdown-basic-button"  onSelect={handleuplang} title={langval}>
        <Dropdown.Item onSelect={handleuplang} value="C++" eventKey="C++">C++</Dropdown.Item>
        <Dropdown.Item onSelect={handleuplang} value="Java" eventKey="java">JAVA</Dropdown.Item>
         <Dropdown.Item onSelect={handleuplang} eventKey="Python">Python</Dropdown.Item>
    </DropdownButton>
            </div>
            <div className="col">
            <button className="btn btn-primary policy" onClick={handleupsave}>Save</button>
    
            </div>
            </div>
            <Editor
              height="100%"
              value={setcodemark}
              theme="vs-dark"
              onChange={(value) => setsetcodemark(value)}
              defaultLanguage="javascript"
              onMount={handleEditorDidMount }
            />
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </>
  );
}

export default Editorpage;
