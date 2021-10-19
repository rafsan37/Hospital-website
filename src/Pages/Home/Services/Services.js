import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./services.css"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/data.JSON')
        .then(res => res.json())
        .then( data => setServices(data));
    }, [])
    return (
        <div id="services" className="container mt-5">
            <h1 className="text-center">Explore Our Caring & Premium <br /> Medical Services</h1>
            <div className="row">
            {
                services.map(service => <Service key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;