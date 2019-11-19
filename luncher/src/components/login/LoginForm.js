/* eslint-disable no-console */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const LoginForm = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/profile");
      })
      .catch(err => console.log(err, err.response));
  };

  return (
    <Formik>
      <form onSubmit={login}>
        <h1>LOGIN:</h1>
        <input
          className="input-row"
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          value={credentials.username}
          onChange={handleChange}
        />

        <input
          className="input-row"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>

        <div className="register">
          <p>Not a Member?</p>
          <Link to="/signup"> Register Here</Link>
        </div>
      </form>
    </Formik>
  );
};

export default LoginForm;
