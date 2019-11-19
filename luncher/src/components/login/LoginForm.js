import React, { useState } from "react";
import { Formik } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
      .catch(err =>
        // eslint-disable-next-line no-console
        console.log(err, err.response)
      );
  };

  return (
    <Formik>
      <form onSubmit={login}>
        <div className="input-row">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>

        <div className="input-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Formik>
  );
};

export default LoginForm;
