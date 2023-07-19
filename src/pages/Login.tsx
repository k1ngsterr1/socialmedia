import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Navigate
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values: typeof initialValues) => {
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate("/main");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="page bg-teal-50">
      <div className="container flex justify-center align-center flex-col">
        <h1 className="text-5xl font-bold text-center text-gray-800">Login</h1>
        <Formik
          className="flex flex-col m-auto"
          initialValues={initialValues}
          onSubmit={handleLogin}
        >
          <Form className="flex flex-col m-auto">
            <div>
              <Field
                type="email"
                placeholder="Email"
                className="w-64 h-12 mt-16 text-gray-900 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
                name="email"
              ></Field>
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field
                placeholder="Password"
                type="password"
                className="w-64 h-12 mt-8 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
                autoComplete="off"
                name="password"
                required
              ></Field>
              <ErrorMessage name="password" component="div" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-32 h-12 cursor-pointer mt-8 m-auto text-white text-xl rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Login
            </button>
          </Form>
        </Formik>
        <div className="flex align-center m-auto mt-8">
          <input type="checkbox" className="w-5" />
          <span className="ml-4 text-lg text-gray-00">Remember me</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
