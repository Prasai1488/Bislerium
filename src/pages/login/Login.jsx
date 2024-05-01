// import "./login.css"

// export default function Login() {
//   return (
//     <div className="login">
//         <span className="loginTitle">Login</span>
//         <form className = "loginForm">
//             <label>Email</label>
//             <input type="text" className="loginInput"  placeholder="Enter your email..." />
//             <label>Password</label>
//             <input type="password" className="loginInput" placeholder="Enter your password..." />
//             <button className="loginButton">Login</button>
//         </form>
//         <button className="loginRegisterButton">Resister</button>
//     </div>
//   )
// }

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  // Setup Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Here you would typically handle the login logic, perhaps sending a request to your server
    },
  });

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={formik.handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red", fontSize: "12px" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</div>
        ) : null}
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
