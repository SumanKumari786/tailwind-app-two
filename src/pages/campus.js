import React from 'react';
import Banner from "../components/banner";
import SeamlessConnectivity from "../components/seamlessConnectivity.js.js";
import Footer from '../components/footer';
const Campus = () => {
    const backgroundImageUrl = '/images/campus-bg.jpg';
    return(
        <div>
            <Banner text="Campus" backgroundImage={backgroundImageUrl}/>
            <SeamlessConnectivity />
            <Footer />
        </div>
    )
}
export default Campus;