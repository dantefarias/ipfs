import Typography from "@mui/material/Typography";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import ErrorBar from "../../components/ErrorBar";
import { login } from "../../services/user";

import "./Login.css";

const Login = ({ setToken }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      return login({ email, password })
        .then(({ data }) => setToken(data.accessToken))
        .catch((err) =>
          setError(
            err.response
              ? err.response.data.error || err.response.data.message
              : err.message
          )
        );
    },
    [email, password, setToken, setError]
  );

  return (
    <div className="login-form">
      {error && <ErrorBar handleClose={() => setError(null)} message={error} />}
      <div className="title">
        <Typography variant="h3">Login</Typography>
      </div>
      <form onSubmit={handleSubmit} className="form-data">
        <div className="input-container">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
      <div className="sign-up">
        <span>
          Sign up <Link to="/signup">here</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
