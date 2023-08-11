// import React, { useContext, useState ,useEffect,setRememberMe} from "react";
// import { Link } from "react-router-dom";
// import "./signup.css";
// import { AppContext } from "../../utils/AppContext";

// export default function Signup() {

//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")

//   const {signup,loading} = useContext(AppContext);
//     useEffect(() => {
//     const rememberedUser = localStorage.getItem("rememberedUser");
//     if (rememberedUser) {
//       const userData = JSON.parse(rememberedUser);
//       setEmail(userData.email);
//       setPassword(userData.password);
//       setRememberMe(true);
//     }
//   }, []); // This empty dependency array ensures the effect runs only once

//   return (
//     <div className="card">
//       <div className="card__content">
//         <h3>Create Account</h3>
//         <form 
//         onSubmit={e => {
//           e.preventDefault();
//           signup(name,email,password);
//         }}>
//           <label htmlFor="name">Name</label>
//           <input value={name} onChange={e => setName(e.currentTarget.value) } required type="text" name="name" minLength="1" id="name" />
//           <label htmlFor="email">Email</label>
//           <input value={email} onChange={e => setEmail(e.currentTarget.value) } required type="email" name="email" id="email" />

//           <label htmlFor="password">Password</label>
//           <input
//             value={password}
//             onChange={e => setPassword(e.currentTarget.value) }
//             required
//             minLength="8"
//             type="password"
//             name="password"
//             id="password"
//           />
//           <p style={{fontSize: 9}}></p>
          

//           <input disabled={loading} className="btn" id="btn" type="submit" value={loading ? "Loading..." :"Sign Up"}/>

//           <p className="formfooter">
//             Already have an account?  <Link to="/"> Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./signup.css";
// import { AppContext } from "../../utils/AppContext";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false); // State to remember user

//   const { signup, loading } = useContext(AppContext);

//   useEffect(() => {
//     const rememberedUser = localStorage.getItem("rememberedUser");
//     if (rememberedUser) {
//       const userData = JSON.parse(rememberedUser);
//       setEmail(userData.email);
//       setPassword(userData.password);
//       setRememberMe(true); // Set rememberMe state to true
//     }
//   }, []); // This empty dependency array ensures the effect runs only once

//   // Update the effect when the rememberMe state changes
//   useEffect(() => {
//     if (rememberMe) {
//       localStorage.setItem(
//         "rememberedUser",
//         JSON.stringify({ email, password })
//       );
//     } else {
//       localStorage.removeItem("rememberedUser");
//     }
//   }, [rememberMe, email, password]);

//   return (
//     <div className="card">
//       <div className="card__content">
//         <h3>Create Account</h3>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             signup(name, email, password);
//           }}
//         >
//           <label htmlFor="name">Name</label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.currentTarget.value)}
//             required
//             type="text"
//             name="name"
//             minLength="1"
//             id="name"
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.currentTarget.value)}
//             required
//             type="email"
//             name="email"
//             id="email"
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.currentTarget.value)}
//             required
//             minLength="8"
//             type="password"
//             name="password"
//             id="password"
//           />
//           <label>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />{" "}
//             Remember me
//           </label>

//           <p style={{ fontSize: 9 }}></p>

//           <input
//             disabled={loading}
//             className="btn"
//             id="btn"
//             type="submit"
//             value={loading ? "Loading..." : "Sign Up"}
//           />

//           <p className="formfooter">
//             Already have an account? <Link to="/"> Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { AppContext } from "../../utils/AppContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { signup, loading } = useContext(AppContext);

  useEffect(() => {
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      const userData = JSON.parse(rememberedUser);
      setEmail(userData.email);
      setPassword(userData.password);
      setRememberMe(true);
    }
  }, []); // This empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem(
        "rememberedUser",
        JSON.stringify({ email, password })
      );
    } else {
      localStorage.removeItem("rememberedUser");
    }
  }, [rememberMe, email, password]);

  return (
    <div className="card">
      <div className="card__content">
        <h3>Create Account</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signup(name, email, password);
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            name="name"
            minLength="1"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            type="password"
            name="password"
            id="password"
          />
          <div className="rmb">
            <label class="checkbox-container">
              <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
              <span class="checkmark"></span>
              <p className="text">Remember me</p>
            </label>
          </div>

          <button
            disabled={loading}
            className="btn"
            id="btn"
            type="submit"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <p className="formfooter">
            Already have an account? <Link to="/"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
