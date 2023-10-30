import React from 'react';
import Banner from "../components/banner";
import SeamlessConnectivity from "../components/seamlessConnectivity.js.js";
import Footer from '../components/footer';
const ConnectivityPage = () => {
    const backgroundImageUrl = '/images/exp.jpg';
    return(
        <div>
            <Banner text="Location Advantage" backgroundImage={backgroundImageUrl}/>
            <SeamlessConnectivity />
            <Footer />
        </div>
    )
}
export default ConnectivityPage;