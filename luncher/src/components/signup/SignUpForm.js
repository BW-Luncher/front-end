/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from "react";
import { Formik } from "formik";
// import axios from "axios";

function SignUpForm({ isSubmitting }) {
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
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>

          <button type="reset">Reset</button>
        </div>
      </form>
    </Formik>
  );
}

// handleSubmit(values, { resetForm, setSubmitting }){
//   axios
//     .post("http://lambdaluncher.herokuapp.com/api/auth/login", values)
//     .then(res => {
//       console.log(res); // Data was created successfully and logs to console
//       resetForm();
//       setSubmitting(false);
//     })
//     .then(res => {
//       console.log("res", res);
//       alert("An Account was created, Please Login.");
//     })
//     .catch(err => {
//       console.log(err.response); // There was an error creating the data and logs to console
//       setSubmitting(false);
//     });
// }(SignUpForm);

export default SignUpForm;
