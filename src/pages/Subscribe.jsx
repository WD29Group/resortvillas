import {db} from '../firebase'
import {addDoc, collection} from 'firebase/firestore'
import React, { useState } from 'react';

const Subscribe = ({ scroll }) => {
  const [input, setInput] = useState('');

  const subscribeToList = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    await addDoc(collection(db, 'subscription'), {
        email: input,
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
<div>
  <div className="rvmodal material-symbols-outlined AccountProfile" data-bs-toggle="modal" data-bs-target="#AccProf">
  mail
  </div>
  
  <div className="modal fade" id="AccProf">
    <div className="modal-dialog modal-dialog-centered">
      <div className=" ModaSVlBorder Cardtransp modal-content p-5">
        <p className="fw-bold mb-3 text-center h2">Subscribe to our newsletter</p>
          <form onSubmit={subscribeToList}>
            <center>
            <div className="mb-3">
              <input id="fieldemail" className="form-control" type="text" name="email" value={input} placeholder='name@email.com' onChange={(e) => setInput(e.target.value)} />
            </div>
            <button className="SubscribedBtn" type="submit" data-bs-dismiss="modal">Subscribe</button>
            </center>
          </form>
        </div>
    </div>
  </div>
</div>
  );
};
export default Subscribe;
