import React, { useEffect } from "react";
import './App.css';
import Hero from './components/hero';
import AOS from "aos";
import "aos/dist/aos.css";
import Animate from "./components/animate";
import Experiance from "./components/experiance";
import Connectivity from "./components/connectivity";
export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
   <div className="bg-[#354033]">
      <Hero />
      <Animate />
      <Experiance />
      <Connectivity />
   </div>
  )
};
