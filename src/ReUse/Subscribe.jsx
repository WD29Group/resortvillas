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










// import {db} from '../firebase'
// import {addDoc, collection} from 'firebase/firestore'
// import React, { useState } from 'react';

//   const Subscribe = ({ scroll }) => {
//   const [input, setInput] = useState('');
//   const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const subscribeToList = async (e) => {
//     e.preventDefault()
//     if (input === '' || !input.match(emailRegex)) {
//         alert('Please enter a valid email address')
//         return
//     }
//     await addDoc(collection(db, 'subscription'), {
//         email: input,
//     })
//     setInput('')
//     scroll.current.scrollIntoView({behavior: 'smooth'})
//   }
  
//   return (

//   );
// };
// export default Subscribe;



































// import "./App.css";
// import { db } from "./firebase";
// import { uid } from "uid";
// import { set, ref, onValue, remove, update } from "firebase/database";
// import { useState, useEffect } from "react";

// function App() {
//   const [email, setemail] = useState("");
//   const [emails, setemails] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [tempUuid, setTempUuid] = useState("");

//   const handleemailChange = (e) => {
//     setemail(e.target.value);
//   };

//   //read
//   useEffect(() => {
//     onValue(ref(db), (snapshot) => {
//       setemails([]);
//       const data = snapshot.val();
//       if (data !== null) {
//         Object.values(data).map((email) => {
//           setemails((oldArray) => [...oldArray, email]);
//         });
//       }
//     });
//   }, []);

//   //write
//   const writeToDatabase = () => {
//     const uuid = uid();
//     set(ref(db, `/${uuid}`), {
//       email,
//       uuid,
//     });

//     setemail("");
//   };

//   //update
//   const handleUpdate = (email) => {
//     setIsEdit(true);
//     setTempUuid(email.uuid);
//     setemail(email.email);
//   };

//   const handleSubmitChange = () => {
//     update(ref(db, `/${tempUuid}`), {
//       email,
//       uuid: tempUuid,
//     });

//     setemail("");
//     setIsEdit(false);
//   };

//   //delete
//   const handleDelete = (email) => {
//     remove(ref(db, `/${email.uuid}`));
//   };

//   return (
//     <div className="App">
//       <input type="text" value={email} onChange={handleemailChange} />
//       {isEdit ? (
//         <>
//           <button onClick={handleSubmitChange}>Submit Change</button>
//           <button
//             onClick={() => {
//               setIsEdit(false);
//               setemail("");
//             }}
//           >
//             X
//           </button>
//         </>
//       ) : (
//         <button onClick={writeToDatabase}>submit</button>
//       )}
//       {emails.map((email) => (
//         <>
//           <h1>{email.email}</h1>
//           <button onClick={() => handleUpdate(email)}>update</button>
//           <button onClick={() => handleDelete(email)}>delete</button>
//         </>
//       ))}
//     </div>
//   );
// }

// export default App;