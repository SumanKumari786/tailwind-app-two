import React, { useEffect } from "react";
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/home";

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    
   <div className="bg-darkGreen">
     <HomePage />
   </div>
  )
};
