import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";

function Admin() {
  const [email, setemail] = useState("");
  const [emails, setemails] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  //read
    
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setemails([]);
      const data = snapshot.val();
        if (data !== null) {
          // eslint-disable-next-line
        Object.values(data).map((email) => {
          setemails((oldArray) => [...oldArray, email]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      email,
      uuid,
    });

    setemail("");
  };

  //update
  const handleUpdate = (email) => {
    setIsEdit(true);
    setTempUuid(email.uuid);
    setemail(email.email);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      email,
      uuid: tempUuid,
    });

    setemail("");
    setIsEdit(false);
  };

  //delete
  const handleDelete = (email) => {
    remove(ref(db, `/${email.uuid}`));
  };

  return (
    <div  className="adminPanel">
      <h5 className="text-center pb-2 odaSVlBorder">Our email subscribers for newsletter</h5>
      <input className="mb-2 form-control visible-false" type="text" value={email} onChange={handleemailChange} />
      {isEdit ? (
        <>
          <button className="m-1 btn btn-warning visible-false" onClick={handleSubmitChange}>Save Changes</button>
          <button className="btn btn-warning visible-false" onClick={() => {setIsEdit(false); setemail(""); }} >
            Cancel
          </button>
        </>
      ) : (
        <button className="btn btn-warning visible-false" onClick={writeToDatabase}>Save</button>
      )}
      <div  className=" emailFields">

      {emails.map((email) => (
        <div className="emailFields2">
          <div className="">
            <div>
              
            </div>
            <p>{email.email}</p>
            <button className="btn unshow" onClick={() => handleUpdate(email)}>✏️</button>
            <button className="btn unshow" onClick={() => handleDelete(email)}>❌</button>
          </div>
        </div>

      ))}
        </div>
    </div>
  );
}

export default Admin;