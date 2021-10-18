import React, { useEffect, useState } from 'react';
import Consultant from './Consultant/Consultant';

const Consultants = () => {
    const [consultants, setConsultants] = useState([]);
    useEffect(() => {
        fetch("./team.JSON")
        .then(res => res.json())
        .then(data => setConsultants(data));
    }, [])
    return (
        <div className="container my-5">
            <div className="row">
            <h2>Team Of Consultants</h2>
            {
                consultants.map(consultant => <Consultant key={consultant.id}
                    consultant={consultant}
                ></Consultant>)
            }
            </div>
            
        </div>
    );
};

export default Consultants;