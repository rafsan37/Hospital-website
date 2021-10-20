import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../img/banner/1.jpg';
import banner2 from '../../../img/banner/2.jpg';
import banner3 from '../../../img/banner/3.jpg';

const Banner = () => {
    return (
        <div >
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2} alt=""
    />
    <Carousel.Caption>
      <h3 className="text-color">X-Ray pleophos-D, 300 MA Siemens available</h3>
      <p className="text-dark">In every life situation, we have a choice as to how we react. At no time is this</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3} alt=""
    />

    <Carousel.Caption>
      <h3 className="text-color">24hours ECG services including machine report</h3>
      <p className="text-dark">Patients who were checked for shortness of breath at the beginning of hospice care.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1} alt=""
    />

    <Carousel.Caption>
      <h3 className="text-color">24 hours patient transport vehicle available.</h3>
      <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;