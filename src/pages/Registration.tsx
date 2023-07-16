import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import firebase from "firebase/app";
import "firebase/auth";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .test("password-match", "Passwords must match", function (value) {
      return value === this.resolve(Yup.ref("password"));
    })
    .nullable()
    .required("Confirm Password is required"),
});

const Registration = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="page bg-teal-50">
      <div className="container flex flex-col justify-center align-center">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Registration
        </h1>
        <form className="flex flex-col m-auto" autoComplete="off">
          <input
            placeholder="Username"
            type="text"
            className="w-64 h-12 mt-16 text-gray-900 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
            autoComplete="off"
            name="name"
            required
          ></input>
          <input
            placeholder="Email"
            type="email"
            className="w-64 h-12 mt-8 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
            autoComplete="off"
            name="email"
            required
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="w-64 h-12 mt-8 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
            autoComplete="off"
            name="password"
            required
          ></input>
          <input
            placeholder="Confirm password"
            type="password"
            className="w-64 h-12 mt-8 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
            autoComplete="off"
            name="password"
            required
          ></input>
          <button
            type="submit"
            className="bg-blue-500 w-32 h-12 cursor-pointer mt-8 m-auto text-white text-xl rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
