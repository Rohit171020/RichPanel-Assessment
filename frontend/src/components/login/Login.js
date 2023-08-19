import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";

  
 export default function LoginPage() {
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
      console.log("Error while logging in");
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
      <div className="login-card">
       <div className="login-card__content">
        <h3>Login to Your Account</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <label htmlFor="email">Email Address</label>
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

         
              
            <div className="remember-checkbox">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <input
            disabled={loading}
            className="login-btn"
            id="login-btn"
            type="submit"
            value={loading ? "Logging in..." : "Login"}
          />

          
            <p className="login-form-footer">
            New user? <Link to="/signup">Sign Up</Link>{" "}
          </p>
        </form>
        </div>
    </div>
  );
}
