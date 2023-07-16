import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <div className="application">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Authentication}></Route>
          <Route path="/registration" Component={Registration}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
