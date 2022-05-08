import React from "react";
import "./style.css";
import Home from "./Home"
import Blogs from "./Blogs";
import {BrowserRouter,Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={ <Blogs />} />
       </Routes>
    </div>
  );
}
