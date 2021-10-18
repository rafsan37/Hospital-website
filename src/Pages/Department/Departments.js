import React from 'react';
import { NavLink } from 'react-router-dom';
import deimg from '../../img/department.png'
import deicon1 from '../../img/department/de-icon1.png'
import deicon2 from '../../img/department/de-icon02.png'
import deicon3 from '../../img/department/de-icon03.png'

const Departments = () => {
    return (
        <div>
            <div className="container text-center mt-5">
            <h1 className="fw-bold">Contact US</h1>
            <div className="d-flex my-3 align-items-center justify-content-center">
                <NavLink to ="/home" className="nav-style fs-5">Home</NavLink>/
                 <NavLink to ="/contact" className="nav-style fs-5">Contact</NavLink>
            </div>
        </div>

        {/* departments part */}

            <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <div className="d-flex align-items-center border rounded-3 bg-light my-3">
                        <img src={deicon1} alt="" className="bg-white p-3 ms-2 rounded-pill" />
                        <div className="ms-4">
                            <h3>Pedlatric</h3>
                            <p>Pediatrics is the branch of medicine <br /> 
                            dealing with the health and medical care of infants</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border rounded-3 bg-light my-3">
                        <img src={deicon2} alt="" className="bg-white p-3 ms-2 rounded-pill" />
                        <div className="ms-4">
                            <h3>Dental</h3>
                            <p>Being the pioneer hospital oriented dental clinic <br /> we can afford something more than dentistry</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border rounded-3 bg-light my-3">
                        <img src={deicon3} alt="" className="bg-white p-3 ms-2 rounded-pill" />
                        <div className="ms-4">
                            <h3>Physicians</h3>
                            <p>Pleasure and praising pain was born and I will give you <br /> a complete account of the systems</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <img src={deimg} alt="" className="img-fluid"/>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Departments;