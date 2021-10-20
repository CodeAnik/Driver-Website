import React from 'react';
import './AboutUS.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUS = (props) => {
    const { point, discription, note,image } = props.aboutUs || {};

    return (
        <div>
            <Container className="py-5">
                <h3 className="text-center py-5 text--crimson">Contact Us</h3>
                <Row className="gy-4">
                    <Col s={12} lg={3} md={4} className="aboutUsList">
                        <li><Link to="">{point?.[0]}</Link></li>
                        <li><Link to="">{point?.[1]}</Link></li>
                        <li><Link to="">{point?.[2]}</Link></li>
                        <li><Link to="">{point?.[3]}</Link></li>
                        <li><Link to="">{point?.[4]}</Link></li>
                    </Col>
                    <Col s={12} lg={6} md={8}>
                        <p>{discription}.</p>
                    </Col>
                    <Col s={12} lg={3} md={12} >
                        <h6>
                            {note}
                        </h6>
                        <img className="mr-auto" src={image} alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AboutUS;