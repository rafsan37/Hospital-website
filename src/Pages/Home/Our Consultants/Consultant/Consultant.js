import React from 'react';

const Consultant = ({consultant}) => {
    const {name, img, stay} = consultant;
    return (
        <div className="col-lg-3 col-md-6 col-12 mt-3">
            <div className="card card-container mx-auto" style= {{width: '18rem'}}>
                    <img className="card-img-top img-size1 " src={img} alt="Card"/>
                <div className="card-body service">
                    <h5 className=" text-center card-title">{name}</h5>
                    <p className="text-center fs-3">{stay}</p>
                </div>
            </div>
        </div>
    );
};

export default Consultant;