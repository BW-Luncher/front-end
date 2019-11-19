/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";

function LoginForm({ errors, touched, isSubmitting }) {
  return (
    <Form>
      <Field
        className="input-row"
        type="text"
        name="school"
        id="school"
        placeholder="Enter School's Name"
        required
      />

      <Field
        className="input-row"
        type="text"
        name="address"
        id="address"
        placeholder="Enter School's Address"
        required
      />

      <Field
        className="input-row"
        type="email"
        name="email"
        id="email"
        placeholder="Enter School's Email"
        required
      />

      <Field
        className="input-row"
        type="number"
        name="goal"
        id="goal"
        placeholder="Enter School's Goal for Funds"
        required
      />
      <button type="submit" disabled={isSubmitting}>
        Create Profile
      </button>
      <button type="reset">Reset</button>
    </Form>
  );
}

const Profile = withFormik({
  mapPropsToValues({ school, address, email, goal }) {
    return {
      school: school || "",
      address: address || "",
      email: email || "",
      goal: goal || ""
    };
  },

  handleSubmit(values, { resetForm, setSubmitting }) {
    axios
      .post("http://lambdaluncher.herokuapp.com/api/schools", values)
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
        console.log(err, err.response); // There was an error creating the data and logs to console
        setSubmitting(false);
      });
  }
})(LoginForm);

export default Profile;
