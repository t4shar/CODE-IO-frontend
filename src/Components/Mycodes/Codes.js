import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import CodeContext from '../../Context/Codes/CodeContext'
import {useNavigate} from 'react-router-dom';

function Codes() {
  const navigate = useNavigate();
  const a = useContext(CodeContext);
  const { code, getCodes, editCode } = a;

  useEffect(() => {
    if(localStorage.getItem('token')  === null ){
      navigate('/login')
    }
   else  getCodes();
  }, [])

  const [etag, setetag] = useState(null)
  const [keyid, setkeyid] = useState(null)
  const [descript, setdescript] = useState(null)
  const [titlee, settitlee] = useState(null)

  const updatecode = (id, title, description, tag) => {
    setetag(tag);
    setkeyid(id);
    setdescript(description);
    settitlee(title)
    ref.current.click();
  }

  const ref = useRef(null)
  const refclose = useRef(null);

  const handleupupdate = () =>{
    refclose.current.click();
    const id = keyid;
    const description = descript;
    const title = titlee;
    const tag = etag
    editCode(id,title,description,tag);
  }
  return (
    <>
      <button type="button" className="btn btn-primary" data-toggle="modal" ref={ref} style={{ display: 'none' }} data-target="#exampleModalCenter">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModalCenter"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit Code</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                  <input type="text" onChange={(e) =>{
                    settitlee(e.target.value)
                  }} value={titlee} className="form-control" id="recipient-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Code:</label>
                  <textarea className="form-control" value={descript} onChange={(e) =>{setdescript(e.target.value)}}   id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={refclose} >Close</button>
              <button type="button" className="btn btn-primary" onClick={handleupupdate}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" center my-3" style={{color : 'white'}}>
        {code.length === 0 && '< Zero Saved Codes />'}
      </h1>
      {
        code.map((c) => {
          return <Card title={c.title} key={c._id} tag={c.tag} id={c._id} description={c.description} updatecode={updatecode} />
        })
      }


    </>
  )
}

export default Codes