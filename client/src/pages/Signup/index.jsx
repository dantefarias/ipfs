import Typography from "@mui/material/Typography";
import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import ErrorBar from "../../components/ErrorBar";
import { signup } from "../../services/user";
import "./Signup.css";

const emailIsValid = (email) => {
  const properFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return properFormat.test(email.toLowerCase());
};

const fieldsAreValid = (email, password, passwordConfirmation) =>
  emailIsValid(email) && !!password && password === passwordConfirmation;

const SignUp = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!fieldsAreValid(email, password, passwordConfirmation)) {
        setError("Invalid fields");
        return;
      }
      return signup({ email, password })
        .then(() => navigate("/login"))
        .catch((err) =>
          setError(
            err.response
              ? err.response.data.error || err.response.data.message
              : err.message
          )
        );
    },
    [email, password, passwordConfirmation, setError, navigate]
  );

  return (
    <div className="sign-up-form">
      {error && <ErrorBar handleClose={() => setError(null)} message={error} />}
      <div className="title">
        <Typography variant="h3">Signup</Typography>
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
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" value="Sign up" />
        </div>
      </form>
      <span>
        Already have an account? Log in <Link to="/login">here</Link>
      </span>
    </div>
  );
};

export default SignUp;
