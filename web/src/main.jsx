import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter, Routes, Route } from "react-router-dom";

import "./Auth.js";

import App from "./App";
import "./index.css";

// Routes
import Home from "./Routes/Home";
import IdeaGen from "./Routes/IdeaGen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/IdeaGen" element={<IdeaGen />} />
      </Route>
    </Routes>
  </HashRouter>
);
