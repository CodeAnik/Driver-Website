import React from 'react';
import './Footer.css';
import { Container, Col, Row, Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div>
            <div className="footerPart1">
                <Container className="py-3">

                    <Row >
                        <Col>
                            <h2>Newsletter Signup</h2>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button className="main-button">Primary</Button>
                            </Form>
                        </Col>
                        <Col className="footerMidCol">
                            <h3>Our Courses</h3>
                            <p>Learn To Drive Slowly</p>
                            <p>Courses For Adults</p>
                            <p>Courses For Adults</p>
                            <p>Lessons For Teens</p>
                            <p>Highway Driving Course</p>
                            <p>For International Drivers</p>
                            <p>Automatic Car Lessons</p>
                        </Col>
                        <Col className="footerMidCol">
                            <h3>Contact Us</h3>
                            <p>72 Main Drive, Calibry, Florida 20304</p>
                            <p>Helpline 24/7 +1 (700) 333 0088</p>
                            <p>Mon to Friday 9:00 am to 7:00 pm</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr />
            <div className="footerPart2">
                <Container className="d-flex justify-content-between">
                    <p>(c) 2021 Driver - Driving School. All rights reserved. Shahin Alam</p>
                    <p>Sitemap  |   Terms & Conditions</p>

                </Container>
            </div>
        </div>
    );
};

export default Footer;