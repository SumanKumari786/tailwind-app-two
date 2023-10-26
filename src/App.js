import React, { useEffect } from "react";
import './App.css';
import Hero from './components/hero';
import AOS from "aos";
import "aos/dist/aos.css";
import Animate from "./components/animate";
import Experiance from "./components/experiance";
import Connectivity from "./components/connectivity";
// import Banner from "./components/connectivity/banner";
// import SeamlessConnectivity from "./components/connectivity/seamlessConnectivity.js";
export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
   <div className="bg-darkGreen">
      <Hero />
      <Animate />
      <Experiance />
      <Connectivity />
      {/* <Banner />
      <SeamlessConnectivity /> */}
   </div>
  )
};
