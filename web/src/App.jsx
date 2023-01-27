import { useState } from "react";
import "./index.css";

import Navbar from "./Components/Navbar";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet />
    </div>
  );
}

export default App;
