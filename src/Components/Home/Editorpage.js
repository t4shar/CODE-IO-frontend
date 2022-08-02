import React, { useContext, useRef, useState } from "react";
// import Navbar from "../Navbar";
import Editor from "@monaco-editor/react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { compileCode } from '../../Api/index'
import CodeContext from "../../Context/Codes/CodeContext";

function Editorpage() {

  const context = useContext(CodeContext);
  const {addCode} = context

  const [setcodemark, setsetcodemark] = useState("//Write your code below");
  const [langval, setlangval] = useState("langauge");
  const [inputarea, setinputarea] = useState('')
  const [outputarea, setoutputarea] = useState('')
  const editorref = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorref.current = editor;
  };
  // exectue the code
  const handleuprun = async (e) => {
    setoutputarea('');
    const data = {
      "code": setcodemark,
      "language": langval,
      "input": inputarea
    }
    console.log(data);
    var res = await compileCode(data);
    console.log(res);
    // const finalres = JSON.stringify(res.data)

    if (res.data.success === true) {
      setoutputarea(res.data.output);
    } else {
      setoutputarea(res.data.error)
    }
  }

  const setlangforeditor = () => {
    if (langval === 'py') return "python"
    if (langval === 'cpp') return "c++"
    return 'java'
  }
  const handleuplang = (e) => {
    setlangval(e);
    console.log(langval)
  }
  const handleupsave = () => {
    let title = prompt("Please enter a title to save")
    if(title.length < 5){
      alert('Title Length should be greater then 5')
      return;
    } 
    const tag = langval;
    const description =  editorref.current.getValue()
    addCode(title,description,tag);
  };
  const handleupinputchange = (event) => {
    setinputarea(event.target.value);
    console.log(inputarea)
  }
  return (
    <>
      {/*   <Navbar /> */}
      <div className="editorpagewrapper">
        <div className=" row row-cols-2">
          <div className="col editorgp p-0">
            <div className="row row-cols-2">
              <div className="col">

                <DropdownButton id="dropdown-basic-button" className="mx-3" onSelect={handleuplang} title={langval}>
                  <Dropdown.Item onSelect={handleuplang} value="cpp" eventKey="cpp">C++</Dropdown.Item>
                  <Dropdown.Item onSelect={handleuplang} value="java" eventKey="java">JAVA</Dropdown.Item>
                  <Dropdown.Item onSelect={handleuplang} eventKey="py">Python</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="col">
                <button className="btn btn-primary policy" onClick={handleupsave}>Save</button>
                <a className="btn btn-primary" role='button' onClick={handleuprun}>RUN</a>
              </div>
            </div>
            <Editor
              height="100%"
              value={setcodemark}
              defaultLanguage='java'
              theme="vs-dark"
              onChange={(value) => setsetcodemark(value)}
              onMount={handleEditorDidMount}
            />
          </div>
          <div className="d-flex flex-column p-0">
            <div className="p-2 ggi" style={{ color: 'white' }}>
              <h4 className="center">Write your input below</h4>
              <div className="md-form">
                <textarea id="form7" className="md-textarea form-control" value={inputarea}
                  style={{ backgroundColor: 'rgb(44, 39, 39)', color: 'white' }}
                  onChange={handleupinputchange} rows="10"></textarea>
              </div>

            </div>
            <div className="p-2 ggi" style={{ color: 'white' }}>
              <h4 className="center">Your Output Terminal</h4>
              <div className="md-form">
                <textarea id="form7" className="md-textarea form-control" value={outputarea}
                  style={{ backgroundColor: 'rgb(44, 39, 39)', color: 'white' }}
                  onChange={handleupinputchange} rows="11" readOnly></textarea>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Editorpage;
