

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "./login.css";
// import { Link } from "react-router-dom";

// // Define the validation schema using Yup
// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// export default function Login() {
//   // Setup Formik
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       // Here you would typically handle the login logic, perhaps sending a request to your server
//     },
//   });

//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={formik.handleSubmit}>
//         <label>Email</label>
//         <input
//           type="text"
//           className="loginInput"
//           placeholder="Enter your email..."
//           {...formik.getFieldProps("email")}
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div style={{ color: "red", fontSize: "12px" }}>
//             {formik.errors.email}
//           </div>
//         ) : null}
//         <label>Password</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//           {...formik.getFieldProps("password")}
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</div>
//         ) : null}
//         <button type="submit" className="loginButton">
//           Login
//         </button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link className="link" to = "/register">REGISTER</Link>
//       </button>
//     </div>
//   );
// }



import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import $axios from "../../lib/axios/axios.instance";  // Ensure $axios is correctly set up for API calls
import { useNavigate } from "react-router-dom";  // Use navigate for redirection after login

// Define the validation schema using Yup
const validationSchema = Yup.object({
  EmailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  Password: Yup.string().required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();

  // Setup Formik
  const formik = useFormik({
    initialValues: {
      EmailAddress: "",
      Password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await $axios.post("/api/account/login", values);
        console.log("Login successful", response.data);

        // Save the token to local storage
    const token = response.data.result.token;
    localStorage.setItem('token', token);


        navigate("/");  // Redirect to dashboard or another path after successful login
      } catch (error) {
        console.error("Login failed:", error.response.data);
        // Optionally, handle errors and display error messages
      }
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
          {...formik.getFieldProps("EmailAddress")}
        />
        {formik.touched.EmailAddress && formik.errors.EmailAddress ? (
          <div style={{ color: "red", fontSize: "12px" }}>
            {formik.errors.EmailAddress}
          </div>
        ) : null}
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          {...formik.getFieldProps("Password")}
        />
        {formik.touched.Password && formik.errors.Password ? (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.Password}</div>
        ) : null}
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">REGISTER</Link>
      </button>
    </div>
  );
}
