import React from "react";

import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate("/login");
  };

  const registrationRedirect = () => {
    navigate("/registration");
  };

  return (
    <div className="page bg-teal-50">
      <div className="container  flex justify-center align-center flex-col">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Authentication
        </h1>
        <div className="buttons flex flex-col justify-center align-center">
          <button
            className="bg-blue-500 w-56 h-16 cursor-pointer mt-16 m-auto text-white text-2xl rounded hover:bg-blue-700 transition-colors duration-300"
            onClick={registrationRedirect}
          >
            Registration
          </button>
          <button
            className="bg-blue-500 w-56 h-16 cursor-pointer mt-8 m-auto text-white text-2xl rounded hover:bg-blue-700 transition-colors duration-300"
            onClick={loginRedirect}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
