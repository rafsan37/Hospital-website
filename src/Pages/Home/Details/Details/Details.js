import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'


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
        <div className="container my-3 d-flex justify-content-around">
             <Card style={{"width":"22rem"}}>
    <Card.Img variant="top" src={singleService?.img} className="img-size"/>
    <Card.Body>
      <Card.Title className="text-warning">{singleService?.name}</Card.Title>
      <Card.Text>
        {singleService?.description}
      </Card.Text>
    </Card.Body>
   
      <button className="btn btn-info">Appointment</button>
    
  </Card>
        </div>
    );
};

export default Details;