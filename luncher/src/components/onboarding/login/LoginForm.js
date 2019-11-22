/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Error from "../../../error/Error";

const Login = ({ errors, touched, isSubmitting }) => {
  return (
    <div>
      <Form>
        <h1 className="title">Login</h1>

        <div className="form-div">
          <i className="fas fa-user" />
          <Field
            className="input-row"
            type="text"
            name="username"
            placeholder="Enter Username"
          />
        </div>
        <Error touched={touched.username} message={errors.username} />

        <div className="form-div">
          <i className="fas fa-key" />
          <Field
            className="input-row"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <Error touched={touched.password} message={errors.password} />

        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
        <div className="center">
          <Link to="/signup">Not a Member? Register Here</Link>
        </div>
      </Form>
    </div>
  );
};

const LoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5)
      .required("A Username is Required"),
    password: Yup.string()
      .min(4)
      .required("A Password is Required")
  }),
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isAuthenticated", true);
        props.history.push("/profile");
        console.log("Logged In", res);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err, err.response);
        setSubmitting(false);
      });
  }
})(Login);

export default LoginForm;
