import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
    const { ourLocation, writeSomeWords, contact } = props.contactUs || {};

    return (
        <div>
            <Container className="py-2">
                <h3 className="text-center py-5 text--crimson">Contact Us</h3>
                <Row>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                        <h3>OUR LOCATION</h3>
                        <p>{ourLocation}</p>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                        <h3>WRITE SOME WORDSCONTACT US</h3>
                        <p>{writeSomeWords?.[0]}</p>
                        <p>{writeSomeWords?.[1]}</p>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                        <h3>WRITE SOME WORDS</h3>
                        <p>{contact?.[0]}</p>
                        <p>{contact?.[1]}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;