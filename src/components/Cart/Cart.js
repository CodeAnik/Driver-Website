import React from 'react';
import './Cart.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cart = (props) => {
    const { INFORMATION } = props.home||{};
    return (
        <div className="cart">
            <Container>
                <h3 className="text--crimson text-center mb-3">INFORMATION</h3>
                <Row>
                    <Col>
                        <Card border="primary" >
                            <Card.Header> <img src="http://fastwpdemo.com/newwp/drivega/wp-content/uploads/2021/06/icon1.svg" alt=""  /></Card.Header>
                            <Card.Body>
                                <Card.Title>{INFORMATION?.[0].title}</Card.Title>
                                <Card.Text>{INFORMATION?.[0].discription}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="primary" >
                            <Card.Header> <img src="http://fastwpdemo.com/newwp/drivega/wp-content/uploads/2021/06/icon2.svg" alt=""  /> </Card.Header>
                            <Card.Body>
                                <Card.Title>{INFORMATION?.[1].title}</Card.Title>
                                <Card.Text>
                                {INFORMATION?.[1].discription}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="primary" >
                            <Card.Header> <img src="http://fastwpdemo.com/newwp/drivega/wp-content/uploads/2021/06/icon3.svg" alt=""  /> </Card.Header>
                            <Card.Body>
                                <Card.Title>{INFORMATION?.[2].title}</Card.Title>
                                <Card.Text>
                                {INFORMATION?.[2].discription}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="primary" >
                            <Card.Header>  <img src="http://fastwpdemo.com/newwp/drivega/wp-content/uploads/2021/06/icon4.svg" alt=""  /> </Card.Header>
                            <Card.Body>
                                <Card.Title>Fully Insured, Licensed & Bonded</Card.Title>
                                <Card.Text>
                                The term “licensed, bonded, and insured” gets used a lot in certain industries, those in which hiring subcontractors is a common practice. Customers are often told to only work with businesses 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Cart;