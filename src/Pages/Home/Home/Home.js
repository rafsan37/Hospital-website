import React from 'react';
import Banner from '../Banner/Banner';
import Consultants from '../Our Consultants/Consultants';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consultants></Consultants>
        </div>
    );
};

export default Home;