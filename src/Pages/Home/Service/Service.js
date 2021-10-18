import React from 'react';
import { Link } from 'react-router-dom';
import "./service.css"

const Service = ({service}) => {
    const {name, img, description, price, id} = service;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card card-container mt-5 mx-auto " style= {{width: '22rem'}}>
                    <img className="card-img-top img-size " src={img} alt="Card"/>
                <div className="card-body service">
                    <h5 className="text-center card-title">{name}</h5>
                    <p className="text-center fs-3 mt-2">{description.slice(0, 74)} </p>
                    <p className="text-center fs-3 mt-2">Price: ${price} </p>
                    <Link to={`/details/${id}`}>
                     <button className="custom-btn btn-5"><span>Details</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;