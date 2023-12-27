import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About";
import App from "../App";


import React from "react";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
