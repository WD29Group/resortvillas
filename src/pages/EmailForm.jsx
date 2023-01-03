// import React, { useState } from 'react';

// function EmailForm() {
//   const [subject, setSubject] = useState('');
//   const [recipient, setRecipient] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // send the email here
//     // alert(`Sending email to ${recipient} with subject "${subject}" and message "${message}"`);
//   }

//     return (
//         <div style={{
//             background: "white",
//             width: "500px",
//             height: "350",
//             padding: "20px",
//             position: "fixed",
//             zIndex: "3",
//             bottom: " 100px",
//             left:"150px",
            
            
//       }}>
//         <form action="mailto:markolofernes52615@gmail.com" method="post" enctype="text/plain" >
//         <label>
//             Subject:
//             <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} />
//         </label>
//         <br />
//         <label>
//             Recipient:
//             <input type="text" value={recipient} onChange={(event) => setRecipient(event.target.value)} />
//         </label>
//         <br />
//         <label>
//             Message:
//             <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Send</button>
//         </form>
//       </div>
//   );
// }

// export default EmailForm;
