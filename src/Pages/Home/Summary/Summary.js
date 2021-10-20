import { faHospital, faMale, faNotesMedical, faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./summary.css"

const Summary = () => {
    return (
        <div className="container bg-img my-5">
            <Row className=" m-0" >
                            <Col md={3} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faMale}></FontAwesomeIcon></p>
                                <p>50+</p>
                                <p>DOCTORS</p>
                            </Col>
                            <Col md={3} sm={12} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faNotesMedical}></FontAwesomeIcon></p>
                                <p>250+</p>
                                <p>LAB TESTS</p>
                            </Col>
                            <Col md={3} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faUserInjured}></FontAwesomeIcon></p>
                                <p>5,000,000 + </p>
                                <p>WE HAVE 330 CORPORATE <br /> CUSTOMERS WITH 5M+ PATIENTS</p>
                            </Col>
                            <Col md={3} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></p>
                                <p>1 of the first</p>
                                <p>GOVERNMENT-APPROVED <br /> PRIVATE LABS TO OFFER COVID-19 TESTING</p>
                            </Col>
                        </Row>
        </div>
    );
};

export default Summary;