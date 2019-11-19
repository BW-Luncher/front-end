import React from "react";
import { Formik } from "formik";

function LoginForm() {
  return (
    <Formik>
      <form>
        <div className="input-row">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter Name" />
        </div>
        <div className="input-row">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="input-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Formik>
  );
}

export default LoginForm;
