import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';

const Home = (props) => {
     const { slider } = props.home||{};
    console.log(slider)
    console.log(props)
    return (
        <div>
            <Carousel >
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100 h-100"
                        src={slider?.[0].image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{slider?.[0].title}</h3>
                        <p>{slider?.[0].discription}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100 h-100"
                        src={slider?.[1].image}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>{slider?.[1].title}</h3>
                        <p>{slider?.[1].discription}</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100 h-100"
                        src={slider?.[2].image}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{slider?.[2].title}</h3>
                        <p>{slider?.[2].discription}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;