import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import CodeContext from '../../Context/Codes/CodeContext'
import { click } from '@testing-library/user-event/dist/click';

function Codes() {

  const a = useContext(CodeContext);
  const { code, getCodes, editCode } = a;

  useEffect(() => {
    getCodes();
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
      <button type="button" class="btn btn-primary" data-toggle="modal" ref={ref} style={{ display: 'none' }} data-target="#exampleModalCenter">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Edit Code</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Title:</label>
                  <input type="text" onChange={(e) =>{
                    settitlee(e.target.value)
                  }} value={titlee} class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Code:</label>
                  <textarea class="form-control" value={descript} onChange={(e) =>{setdescript(e.target.value)}}   id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" ref={refclose} >Close</button>
              <button type="button" class="btn btn-primary" onClick={handleupupdate}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {
        code.map((c) => {
          return <Card title={c.title} key={c._id} tag={c.tag} id={c._id} description={c.description} updatecode={updatecode} />
        })
      }


    </>
  )
}

export default Codes