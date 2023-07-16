import React from "react";

const Login = () => {
  return (
    <div className="page bg-teal-50">
      <div className="container flex justify-center align-center flex-col">
        <h1 className="text-5xl font-bold text-center text-gray-800">Login</h1>
        <form className="flex flex-col m-auto">
          <input
            placeholder="Email"
            type="email"
            className="w-64 h-12 mt-16 text-gray-900 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="w-64 h-12 mt-8 pl-4 outline-none border-solid border-2 border-teal-400 rounded focus:border-teal-600"
          ></input>
          <button className="bg-blue-500 w-32 h-12 cursor-pointer mt-8 m-auto text-white text-xl rounded hover:bg-blue-700 transition-colors duration-300">
            Login
          </button>
          <div className="flex align-center m-auto mt-8">
            <input type="checkbox" />
            <span className="ml-4 text-lg">Remember me</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
