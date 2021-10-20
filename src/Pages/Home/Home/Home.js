import React from 'react';
import Banner from '../Banner/Banner';
import Consultants from '../Our Consultants/Consultants';
import Services from '../Services/Services';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consultants></Consultants>
            <Summary></Summary>
        </div>
    );
};

export default Home;