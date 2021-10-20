import { faHospital, faMale, faNotesMedical, faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./summary.css"

const Summary = () => {
    return (
        <div className="container p-0 bg-img my-5">
            <div className="bg-color m-0">
            <Row className=" m-0" >
                            <Col md={3} className="p-3">
                                <p className="fs-1"><FontAwesomeIcon icon={faMale}></FontAwesomeIcon></p>
                                <p>50+</p>
                                <p>DOCTORS</p>
                            </Col>
                            <Col md={3} sm={12} className="p-3">
                                <p className="fs-1"><FontAwesomeIcon icon={faNotesMedical}></FontAwesomeIcon></p>
                                <p>270+</p>
                                <p>LAB TESTS</p>
                            </Col>
                            <Col md={3} className="p-3 text-color">
                                <p className="fs-1"><FontAwesomeIcon icon={faUserInjured}></FontAwesomeIcon></p>
                                <p>7,000,000 + </p>
                                <p>WE HAVE 190 stuff <br /> 500000+ PATIENTS</p>
                            </Col>
                            <Col md={3} className="p-3">
                                <p className="fs-1"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></p>
                                <p>1 of the first</p>
                                <p>GOVERNMENT-APPROVED</p>
                            </Col>
                        </Row>
            </div>
        </div>
    );
};

export default Summary;