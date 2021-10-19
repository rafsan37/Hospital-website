import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from './Detail/Detail';

const Details = () => {
    const {serviceId} = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/data.JSON')
        .then(res => res.json())
        .then( data => setServices(data));
    }, []);
    const singleService = services.filter(service =>
        service.id === serviceId  
    ); 
            console.log(singleService);
    return (
        <div>
            <h1>this is details: {serviceId}</h1>
            {
                singleService.map((detail) => <Detail key={Detail.id}
                 detail={detail}
                ></Detail>)
            }
        </div>
    );
};

export default Details;