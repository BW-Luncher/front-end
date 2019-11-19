/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from "react";
import { withFormik } from "formik";
import axios from "axios";

function LoginForm({ errors, touched, isSubmitting }) {
  return (
    <form>
      <h1>Sign Up</h1>

      <input
        className="input-row"
        type="text"
        name="username"
        id="username"
        placeholder="Create Username"
      />

      <input
        className="input-row"
        type="password"
        name="password"
        id="password"
        placeholder="Create your Password"
      />

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <button type="reset">Reset</button>
    </form>
  );
}

const Profile = withFormik({
  mapPropsToValues({ username, password, name, phone, email }) {
    return {
      username: username || "",
      password: password || "",
      name: name || "",
      phone: phone || "",
      email: email || ""
    };
  },

  handleSubmit(values, { resetForm, setSubmitting }) {
    axios
      .post(
        "https://wedding-planner-buildweek.herokuapp.com/api/auth/user/register",
        values
      )
      .then(res => {
        console.log(res); // Data was created successfully and logs to console
        resetForm();
        setSubmitting(false);
      })
      .then(res => {
        console.log("res", res);
        alert("An Account was created, Please Login.");
      })
      .catch(err => {
        console.log(err.response); // There was an error creating the data and logs to console
        setSubmitting(false);
      });
  }
})(LoginForm);

export default Profile;
