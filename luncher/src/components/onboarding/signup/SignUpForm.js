/* eslint-disable no-console */
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Error from "../../../error/Error";

const SignUp = ({ errors, touched, isSubmitting }) => (
  <div>
    <Form>
      <h1 className="title">Create Your Account</h1>

      <div className="form-div">
        <i className="fas fa-user" />
        <Field
          className="input-row"
          type="text"
          name="username"
          placeholder="Create Username"
        />
      </div>
      <Error touched={touched.username} message={errors.username} />

      <div className="form-div">
        <i className="fas fa-key" />
        <Field
          className="input-row"
          type="password"
          name="password"
          placeholder="Create Password"
        />
      </div>
      <Error touched={touched.password} message={errors.password} />

      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
      <div className="center">
        <Link to="/login">Already a Member? Log In Now</Link>
      </div>
    </Form>
  </div>
);

const SignUpForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5)
      .required("A School Name is Required"),
    password: Yup.string()
      .min(8)
      .required("A password is required")
  }),
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    axiosWithAuth()
      .post("/auth/register", values)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/login");
        console.log(res);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err, err.response);
        setSubmitting(false);
      });
  }
})(SignUp);

export default SignUpForm;
