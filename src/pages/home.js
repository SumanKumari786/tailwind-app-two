import React from 'react';
import Hero from '../components/hero';
import Animate from "../components/animate";
import Experiance from "../components/experiance";
import Connectivity from "../components/connectivity";
const HomePage = () => {
    return(
        <div>
             <Hero />
            <Animate />
            <Experiance />
            <Connectivity />
        </div>
    )
}
export default HomePage;