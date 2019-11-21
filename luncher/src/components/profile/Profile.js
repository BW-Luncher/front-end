/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import Error from "../../error/Error";

const LoginForm = ({ isSubmitting, touched, errors }) => (
  <Form>
    <h1>Welcome User</h1>
    <h2>Create a School Profile</h2>
    <Field
      className="input-row"
      type="text"
      name="school"
      id="school"
      placeholder="Enter School's Name"
    />
    <Error touched={touched.school} message={errors.school} />

    <Field
      className="input-row"
      type="text"
      name="school_insignia"
      id="school_insignia"
      placeholder="Enter URL for picture of school"
    />
    <Error />

    <Field
      className="input-row"
      type="text"
      name="address"
      id="address"
      placeholder="Enter School's Address"
    />
    <Error touched={touched.address} message={errors.address} />

    <Field
      className="input-row"
      type="email"
      name="email"
      id="email"
      placeholder="Enter School's Email"
    />
    <Error touched={touched.email} message={errors.email} />

    <Field
      className="input-row"
      type="number"
      name="funds_needed"
      id="funds needed"
      placeholder="Enter School's Amount of Funds Needed"
    />
    <Error touched={touched.funds_needed} message={errors.funds_needed} />

    <button type="submit" disabled={isSubmitting}>
      Create Profile
    </button>
    <button type="reset">Reset</button>
  </Form>
);

const Profile = withFormik({
  mapPropsToValues({ school, school_insignia, address, email, funds_needed }) {
    return {
      school: school || "",
      school_insignia: school_insignia || "",
      address: address || "",
      email: email || "",
      funds_needed: funds_needed || ""
    };
  },
  validationSchema: Yup.object().shape({
    school: Yup.string()
      .min(5)
      .required("School Name is Required"),
    address: Yup.string()
      .min(5)
      .required("An Address is Required"),
    email: Yup.string()
      .email()
      .required("Please Enter your Email"),
    funds_needed: Yup.string()
      .min(2)
      .max(6)
      .required("Enter an Amount")
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    axios
      .put("http://lambdaluncher.herokuapp.com/api/schools", values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
      })
      .then(res => {
        console.log("res", res);
        alert("An Account was created, Please Login.");
      })
      .catch(err => {
        console.log(err, err.response);
        setSubmitting(false);
      });
  }
})(LoginForm);

export default Profile;
