import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";

function LoginForm() {
  return (
    <div>
      <Form>
      <h1 className="title">Login</h1>
        <Field
          className="input-row"
          type="text"
          name="username"
          placeholder="Enter Username"
          required
        />
        <Field
          className="input-row"
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <button type="submit">Login</button>
        <div className="center">
          <Link to="/signup">Not a Member? Register Here</Link>
        </div>
      </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
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
      .min(8)
      .required("A Password is Required")
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    axios
      .post("Link", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err, err.response);
        setSubmitting(false);
      });
  }
})(LoginForm);

export default FormikLoginForm;
