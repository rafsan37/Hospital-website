import React from 'react';
import { NavLink } from 'react-router-dom';
import about from '../../../img/about.png'
import about2 from '../../../img/image-4.jpg'
import './About.css'

const About = () => {

 return (
    <div className="about-container py-5">
        <div className="container">
            <div className="text-center mb-5">
                <h1 className="fw-bold">About US</h1>
                <div className="d-flex align-items-center justify-content-center">
                  <NavLink to ="/home" className="fs-5">Home</NavLink>/
                  <NavLink to ="/about" className="fs-5">About</NavLink>
                </div>
            </div>
                    {/* this about section  */}

            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={about} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-12">
                    <h1>We Are Specialize in Medical Diagnositics</h1>
                    <p>Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, our goal is to deliver quality care in a respectful & compassionate manner. We strive to be the first and best choice for healthcare.</p>
                    <ul>
                        <li>* Always Open</li>
                        <li>* Reporting & Analysis</li>
                        <li>* Specialist Doctor</li>
                    </ul>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 col-12">
                    <img src={about2} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-12 custom-text">
                    <p className="text-primary fs-5">A GREAT TECHNOLOGY</p>
                    <h1>We Are The Trusted Experts Latest Laboratory Technology</h1>
                    <p>Paramedical healthcare field attracts to save lives & helping people, being a doctor is not your only choice. We how else you can help patients without being a doctor, here we serving awesome opportunity.</p>
                    <div className="row">
                    <ul className="col-md-6">
                        <li>* Corticosterone EIA</li>
                        <li>* Environmental Testing</li>
                        <li>* Advanced Microscopy</li>
                    </ul>
                    <ul className="col-md-6">
                        <li>* Sample Preparation</li>
                        <li>* Anatomical Pathology</li>
                    </ul>
                    </div>
                    <p className="text-primary fs-5">Don’t hesitate, contact us for better help and services.</p>
                    <button className="custom-btn btn-12 btn-13">Explore Technology</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default About;