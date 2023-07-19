import React from "react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

// Firebase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Navigate
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDV28bf3A8whHJ7N7Got6RrXCKhHAPYjYU",
  authDomain: "studyapp-90324.firebaseapp.com",
  projectId: "studyapp-90324",
  storageBucket: "studyapp-90324.appspot.com",
  messagingSenderId: "440148036708",
  appId: "1:440148036708:web:eb636de1a68188b393e371",
  measurementId: "G-EK7YKTGEM6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/main");
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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

  const registrationSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const { name, email, password } = values;

      if (name && email && password) {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        await userCredential.user?.updateProfile({ displayName: name });

        try {
          console.log(userCredential.user?.uid);

          const db = firebase.firestore();

          await db.collection("users").doc(userCredential.user?.uid).set({
            name,
            email,
            password,
          });

          console.log("Registration was successful");
          resetForm();
          navigate("/main");
        } catch (error) {
          console.error("Error writing to Firestore:", error);
        }
      } else {
        console.log("Please provide all required fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page bg-teal-50">
      <div className="container flex flex-col justify-center align-center">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Registration
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={registrationSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col m-auto" autoComplete="off">
              <div className="flex mt-16 items-center justify-center flex-col ">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                  className={`w-64 h-12 text-gray-900 pl-4 outline-none border-solid border-2 rounded focus:border-teal-600 ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-teal-400"
                  }`}
                />{" "}
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-600 font-bold text-lg flex align-center mt-4"
                />
              </div>
              <div className="flex mt-4 items-center justify-center flex-col ">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={`w-64 h-12 text-gray-900 pl-4 outline-none border-solid border-2 rounded focus:border-teal-600 ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-teal-400"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-600 font-bold text-lg flex align-center mt-4"
                />
              </div>
              <div className="flex mt-4 items-center justify-center flex-col ">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className={`w-64 h-12 text-gray-900 pl-4 outline-none border-solid border-2 rounded focus:border-teal-600 ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-teal-400"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-600 font-bold text-lg flex align-center mt-4"
                />
              </div>
              <div className="flex mt-4 items-center justify-center flex-col ">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={`w-64 h-12 text-gray-900 pl-4 outline-none border-solid border-2 rounded focus:border-teal-600 ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-teal-400"
                  }`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-600 font-bold text-lg flex align-center mt-4"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 w-32 h-12 cursor-pointer mt-8 m-auto text-white text-xl rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
