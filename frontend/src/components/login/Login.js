import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";

export default function Login() {
  const { login, loading } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const userData = await login(email, password);
      if (rememberMe) {
        localStorage.setItem("rememberedUser", JSON.stringify({ email, password }));
      } else {
        localStorage.removeItem("rememberedUser");
      }
     
    } catch (error) {
      console.log("trouble in remembering the password");
    }
  };

  useEffect(() => {
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      const userData = JSON.parse(rememberedUser);
      setEmail(userData.email);
      setPassword(userData.password);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="card">
      <div className="card__content">
        <h3>Login to your account</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
            type="password"
            name="password"
            id="password"
          />

          <div className="rem" style={{marginBottom:"5rem"}}>
            <label class="checkbox-container">
              <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
              <span class="checkmark"></span>
              <p className="text">Remember me</p>
            </label>
          </div>

          <input
            disabled={loading}
            className="btn"
            id="btn"
            type="submit"
            value={loading ? "Loading..." : "Login"}
          />

          <p className="formfooter">
            New to MyApp? <Link to="/signup">Sign Up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./signup.css";
// import { AppContext } from "../../utils/AppContext";

// export default function Signup() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false); // Add this state

//   const { signup, loading } = useContext(AppContext);

//   useEffect(() => {
//     const rememberedUser = localStorage.getItem("rememberedUser");
//     if (rememberedUser) {
//       const userData = JSON.parse(rememberedUser);
//       setEmail(userData.email);
//       setPassword(userData.password);
//       setRememberMe(true);
//     }
//   }, []); // This empty dependency array ensures the effect runs only once

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     signup(name, email, password);
//     if (rememberMe) {
//       const userData = { email, password };
//       localStorage.setItem("rememberedUser", JSON.stringify(userData));
//     } else {
//       localStorage.removeItem("rememberedUser");
//     }
//   };

//   return (
//     <div className="card">
//       <div className="card__content">
//         <h3>Create Account</h3>
//         <form onSubmit={handleFormSubmit}>
//           {/* Rest of your form inputs */}
          
//           <label htmlFor="rememberMe">
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//               id="rememberMe"
//             />
//             Remember Me
//           </label>

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
