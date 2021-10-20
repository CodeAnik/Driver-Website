import React from 'react';
import './Services.css';
import { Container, Row } from 'react-bootstrap';

import Service from './../Service/Service';


const Services = (props) => {
    const { ourServices } = props || {};
    return (
        <div>
            <Container className="pt-2 pb-5">
            <h3 className="text-center py-5 text--crimson">Our Services</h3>
                <Row className = "g-4">
                    {ourServices?.map((service)=>( <Service service={service}/> ))}
                    
                </Row>
            </Container>
        </div>
    );
};

export default Services;