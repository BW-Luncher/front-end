// /* eslint-disable no-alert */
// /* eslint-disable no-console */
// import React from "react";
// import { Formik } from "formik";
// // import axios from "axios";

// function SignUpForm() {
//   return (
//     <Formik>
//       <form>
//         <h1>Sign Up</h1>
//         <div className="input-row">
//           <label htmlFor="name">School Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Enter School Name"
//           />
//         </div>
//         <div className="input-row">
//           <label htmlFor="email">School Email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Enter School Email"
//           />
//         </div>
//         <div className="input-row">
//           <label htmlFor="address">School Address</label>
//           <input
//             type="text"
//             name="address"
//             id="address"
//             placeholder="Enter School Address"
//           />
//         </div>
//         <div className="input-row">
//           <button type="submit">Submit</button>

//           <button type="reset">Reset</button>
//         </div>
//       </form>
//     </Formik>
//   );
// }

// export default SignUpForm;

import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUpForm() {
	return (
		<div>
			<Form>
				<Field className="input-row" type="text" name="name" placeholder="Enter School Name" required />
				<Field className="input-row" type="text" name="email" placeholder="Enter School Email" required />
				<Field className="input-row" type="text" name="address" placeholder="Enter School Address" required />
				<button type="submit">Sign Up</button>
				<div>
					<Link to="/signup">Already a Member? Login Here</Link>
				</div>
			</Form>
		</div>
	);
}

const FormikSignUpForm = withFormik({
	mapPropsToValues({ name, email, address }) {
		return {
			name: name || '',
			email: email || '',
			address: address || ''
		};
	},

	validationSchema: Yup.object().shape({
		name: Yup.string().min(5).required('A School Name is Required'),
		email: Yup.string().email('A Valid Email is Required').required('An Email is Required'),
		address: Yup.string().required('An Address is Required')
	}),
	handleSubmit(values, { resetForm, setSubmitting }) {
		axios
			.post('Link', values)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				console.log(res);
				resetForm();
				setSubmitting(false);
			})
			.catch((err) => {
				console.log(err, err.response);
				setSubmitting(false);
			});
	}
})(SignUpForm);

export default FormikSignUpForm;
