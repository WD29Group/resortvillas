import { db } from "../firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import React, { useState } from 'react';

function Subscribe() {
  const [email, setemail] = useState("");
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const subscribeToList = async (e) => {
    e.preventDefault()
    if (email === '' || !email.match(emailRegex)) {
        alert('Please enter a valid email address')
        return
    }
      const uuid = uid();
        set(ref(db, `/${uuid}`), {
          email,
          uuid,
      });
        setemail("");
  }
  return (
    <>
      <div>
        <div className="modal fade" id="subscribe">
          <div className="modal-dialog modal-dialog-centered">
            <div className=" ModaSVlBorder Cardtransp modal-content p-5">
              <p className="fw-bold mb-3 text-center h2">Subscribe to our newsletter</p>
                <center>
                <div className="mb-3">
                  <input id="fieldemail" className="form-control" type="text" name="email" 
                    placeholder='emailname@email.com'
                    value={email}  
                    onChange={(e) => setemail(e.target.value)} />
                </div>
                    <button className="btn btn-warning mb-1" data-bs-dismiss="modal"
                    onClick={subscribeToList}>Subscribe</button>
                </center>
              </div>
          </div>
        </div>
      </div>   
    </>
  );
}

export default Subscribe;
