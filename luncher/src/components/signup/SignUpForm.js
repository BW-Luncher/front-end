import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div>
      <Form>
        <h1 className="title">Create Your Account</h1>
        <Field
          className="input-row"
          type="text"
          name="username"
          placeholder="Create Username"
          required
        />
        <Field
          className="input-row"
          type="text"
          name="pasword"
          placeholder="Create Password"
          required
        />
        <button type="submit">Sign Up</button>
        <div className="center">
          <Link to="/signup">Already a Member? Login Here</Link>
        </div>
      </Form>
    </div>
  );
}

const FormikSignUpForm = withFormik({
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
    password: Yup.string().required("A password is required")
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
})(SignUpForm);

export default FormikSignUpForm;
