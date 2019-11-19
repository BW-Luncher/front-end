/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from "react";
import { Formik } from "formik";
// import axios from "axios";

function SignUpForm() {
  return (
    <Formik>
      <form>
        <h1>Sign Up</h1>
        <div className="input-row">
          <label htmlFor="name">School Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter School Name"
          />
        </div>
        <div className="input-row">
          <label htmlFor="email">School Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter School Email"
          />
        </div>
        <div className="input-row">
          <label htmlFor="address">School Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter School Address"
          />
        </div>
        <div className="input-row">
          <button type="submit">Submit</button>

          <button type="reset">Reset</button>
        </div>
      </form>
    </Formik>
  );
}

export default SignUpForm;
