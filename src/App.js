import React from "react";
import "./style.css";
import Home from "./Home"
import Blogs from "./Blogs";
import {BrowserRouter,Routes, Route } from "react-router-dom"
import Header from "./Header";

export default function App() {
  return (
    <div>
    <BrowserRouter>
       <Header />
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/blogs" element={ <Blogs />} />
       </Routes>
    </BrowserRouter>
    </div>
  );
}
