import axios from "axios";
import { useState } from "react";

function LoginPage(props) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const credential = {
      username: username.toLowerCase(),
      password,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(credential.username)) {
      alert("Enter a valid email");
      return;
    }

    const pinRegex = /^\d{4}$/;
    if (!pinRegex.test(credential.password)) {
      alert("Password must be a 4-digit PIN.");
      return;
    }

    if (isSignUp) {
      try {
        props.setIsLoading(true);
        const res = await axios.post(
          "http://localhost:3000/notes/signup",
          credential
        );
        props.setIsLoading(false);
      } catch (err) {
        props.setIsLoading(false);
        setTimeout(() => alert("Credential Already Exist! Please Login"), 500);
        return;
      }
    }

    try {
      props.setIsLoading(true);
      const res = await axios.put(
        "http://localhost:3000/notes/login",
        credential
      );

      props.setUser(credential.username);
      props.setIsLogged(true);
      props.setIsLoading(false);
    } catch (err) {
      props.setIsLoading(false);
      setTimeout(() => alert("Credential Mismatch"), 500);
    }
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeIsSignUp() {
    setIsSignUp(!isSignUp);
  }

  return (
    <div className="outer-body">
      <div className="auth-login-container">
        <div className="auth-login-container">
          <div className="auth-logo-wrapper">
            <div className="auth-wave-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="black"
                viewBox="0 0 16 16"
                className="bi"
              >
                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
              </svg>
            </div>
            <div className="auth-heading">Notes Keeper</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label className="auth-label">Email address</label>
              <input
                type="email"
                id="auth-email"
                className="auth-input"
                onChange={handleChangeUsername}
                name="username"
                placeholder="user@email.com"
                autoComplete="off"
              />
            </div>
            <div className="auth-form-group">
              <div className="auth-password-wrapper">
                <label className="auth-label">Password</label>
                {/* <!-- <a href="#" className="auth-forgot-link">Forgot password?</a> --> */}
              </div>
              <input
                id="auth-password"
                className="auth-input"
                onChange={handleChangePassword}
                type="password"
                placeholder="4-digit PIN"
                name="password"
                autoComplete="off"
              />
            </div>
            <button type="submit" className="auth-submit-btn">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="auth-signup-wrapper">
            {isSignUp
              ? "already have an account ? "
              : "don't have an account ? "}
            <label onClick={handleChangeIsSignUp} className="auth-signup-link">
              {isSignUp ? "Login" : "Sign Up"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
