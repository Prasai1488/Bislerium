

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "./register.css";
// import { Link } from "react-router-dom";
// import $axios from "../../lib/axios/axios.instance";
// import { useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";

// // Define the validation schema using Yup
// const validationSchema = Yup.object({
//   userName: Yup.string().required("UserName is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
//   fullName: Yup.string().required("Full Name is required"),
//   mobileNumber: Yup.string().required("Mobile Number is required"),
//   imageUrl: Yup.string().url("Invalid image URL").required("Image URL is required"),
// });

// export default function Register() {
//   const navigate = useNavigate();

//   // hit register api
//   const { isPending, mutate } = useMutation({
//     mutationKey: ["register-user"],
//     mutationFn: async (values) => {
//       return await $axios.post("/api/account/register", values);
//     },
//     onSuccess: () => {
//       navigate ("/login");
//     },

//     onError: (error) => {
//       console.log(error.response.data.message);
//     }
//   });

//   // Setup Formik
//   const formik = useFormik({
//     initialValues: {
//       userName: "",
//       email: "",
//       password: "",
//       fullName: "", // Add fullName field
//       mobileNumber: "", // Add mobileNumber field
//       imageUrl: "", // Add imageUrl field
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       mutate(values);
//       // Here you would handle the registration logic, perhaps sending a request to your server
//     },
//   });

//   return (
//     <div className="register">
//       <span className="registerTitle">Register</span>
//       <form className="registerForm" onSubmit={formik.handleSubmit}>
//         <label>UserName</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your UserName..."
//           {...formik.getFieldProps("userName")}
//         />
//         {formik.touched.userName && formik.errors.userName ? (
//           <div className="error-message">{formik.errors.userName}</div>
//         ) : null}

//         <label>Email</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your email..."
//           {...formik.getFieldProps("email")}
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div className="error-message">{formik.errors.email}</div>
//         ) : null}

//         <label>Password</label>
//         <input
//           type="password"
//           className="registerInput"
//           placeholder="Enter your password..."
//           {...formik.getFieldProps("password")}
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <div className="error-message">{formik.errors.password}</div>
//         ) : null}

//         <label>Full Name</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your full name..."
//           {...formik.getFieldProps("fullName")}
//         />
//         {formik.touched.fullName && formik.errors.fullName ? (
//           <div className="error-message">{formik.errors.fullName}</div>
//         ) : null}

//         <label>Mobile Number</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your mobile number..."
//           {...formik.getFieldProps("mobileNumber")}
//         />
//         {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
//           <div className="error-message">{formik.errors.mobileNumber}</div>
//         ) : null}

//         <label>Image URL</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your image URL..."
//           {...formik.getFieldProps("imageUrl")}
//         />
//         {formik.touched.imageUrl && formik.errors.imageUrl ? (
//           <div className="error-message">{formik.errors.imageUrl}</div>
//         ) : null}

//         <button type="submit" className="registerButton">
//           Register
//         </button>
//       </form>
//       <button className="registerLoginButton">
//         <Link className="link" to="/login">
//           Login
//         </Link>
//       </button>
//     </div>
//   );
// }


import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./register.css";
import { Link } from "react-router-dom";
import $axios from "../../lib/axios/axios.instance";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  Username: Yup.string().required("Username is required"),
  EmailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  Password: Yup.string().required("Password is required"),
  FullName: Yup.string().required("Full Name is required"),
  MobileNumber: Yup.string().required("Mobile Number is required"),
  ImageURL: Yup.string().url("Invalid image URL").required("Image URL is required"),
});

export default function Register() {
  const navigate = useNavigate();

  // Mutation for registering user
  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      return await $axios.post("/api/account/register", values);
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      console.log(error.response.data.message);
    }
  });

  // Setup Formik
  const formik = useFormik({
    initialValues: {
      Username: "",
      EmailAddress: "",
      Password: "",
      FullName: "",
      MobileNumber: "",
      ImageURL: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={formik.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Username..."
          {...formik.getFieldProps("Username")}
        />
        {formik.touched.Username && formik.errors.Username ? (
          <div className="error-message">{formik.errors.Username}</div>
        ) : null}

        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          {...formik.getFieldProps("EmailAddress")}
        />
        {formik.touched.EmailAddress && formik.errors.EmailAddress ? (
          <div className="error-message">{formik.errors.EmailAddress}</div>
        ) : null}

        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          {...formik.getFieldProps("Password")}
        />
        {formik.touched.Password && formik.errors.Password ? (
          <div className="error-message">{formik.errors.Password}</div>
        ) : null}

        <label>Full Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your full name..."
          {...formik.getFieldProps("FullName")}
        />
        {formik.touched.FullName && formik.errors.FullName ? (
          <div className="error-message">{formik.errors.FullName}</div>
        ) : null}

        <label>Mobile Number</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your mobile number..."
          {...formik.getFieldProps("MobileNumber")}
        />
        {formik.touched.MobileNumber && formik.errors.MobileNumber ? (
          <div className="error-message">{formik.errors.MobileNumber}</div>
        ) : null}

        <label>Image URL</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your image URL..."
          {...formik.getFieldProps("ImageURL")}
        />
        {formik.touched.ImageURL && formik.errors.ImageURL ? (
          <div className="error-message">{formik.errors.ImageURL}</div>
        ) : null}

        <button type="submit" className="registerButton" disabled={isPending}>
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
