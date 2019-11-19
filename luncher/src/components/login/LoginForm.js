import React, { useState } from "react";
import { Formik } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = props => {
  const [credentials, setCredentials] = useState({
    email: "",
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
      // eslint-disable-next-line no-console
      .catch(err => console.log(err.response));
  };

  return (
    <Formik>
      <form onSubmit={login}>
        <div className="input-row">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={credentials.email}
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
