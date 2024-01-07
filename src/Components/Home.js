// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [email, setEmail] = useState("");
//   const [user, setUser] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("UserName:", user);

//   };

//   return (
//     <div>
//       <Link to="/about">About</Link>
//       <h1>Sign up or log in</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="email"
//             placeholder="enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="enter your username"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//           />
//         </div>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }
import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
  )
}
