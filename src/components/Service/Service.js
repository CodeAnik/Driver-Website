import React from 'react';
import './Service.css';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Service = (props) => {
    const { service } = props || {};
    console.log(service)
    return (
        <Col md={4}>
            <div className="serviceCard p-2">
                <h2> {service?.title}</h2>
                <h3> <span>$</span>{service?.price}</h3>
                <h6>{service?.duration}</h6>
                <hr />
                <p className="text-center">{service?.practiceHours}</p>
                <p className="text-justify">{service?.details}</p>
           
                <Button variant="outline-danger me-2">See Details</Button>
                <Button variant="outline-danger">Join Now</Button>
            </div>
        </Col>
    );
};

export default Service;