import React from "react";
// import Routing from "./Routing";
import Home from "../src/pages/Home";
import "./App.css";
import { Route, Routes } from "react-router";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
};

export default App;
