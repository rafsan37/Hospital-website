import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from './Detail/Detail';

const Details = () => {
    const {serviceId} = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rafsan37/fake-data/main/data.JSON')
        .then(res => res.json())
        .then( data => setServices(data));
    }, []);
    const singleService = services.find(service =>
        service.id === Number(serviceId) 
    ); 

    return (
        <div className="text-center">
            
           <h1 className="text-warning my-3">
               {
                   singleService?.name
               }
           </h1>
           <img src={singleService.img} alt=""/>
           <p className="text-info my-3">{singleService.description}</p>
        </div>
    );
};

export default Details;