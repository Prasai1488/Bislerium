// import "./register.css"

// export default function Register() {
//   return (
//     <div className="register">
//         <span className="registerTitle">Register</span>
//         <form className = "registerForm">
//         <label>UserName</label>
//             <input type="text" className="registerInput"  placeholder="Enter your UserName..." />
//             <label>Email</label>
//             <input type="text" className="registerInput"  placeholder="Enter your email..." />
//             <label>Password</label>
//             <input type="password" className="registerInput" placeholder="Enter your password..." />
//             <button className="registerButton">Register</button>
//         </form>
//         <button className="registerLoginButton">Login</button>
//     </div>
//   )
// }



import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./register.css";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  userName: Yup.string().required('UserName is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

export default function Register() {
  // Setup Formik
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      // Here you would handle the registration logic, perhaps sending a request to your server
    },
  });

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={formik.handleSubmit}>
            <label>UserName</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Enter your UserName..."
              {...formik.getFieldProps('userName')}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="error-message">{formik.errors.userName}</div>
            ) : null}

            <label>Email</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Enter your email..."
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}

            <label>Password</label>
            <input
              type="password"
              className="registerInput"
              placeholder="Enter your password..."
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}

            <button type="submit" className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  );
}
