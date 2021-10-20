import React from 'react';
import { Container } from 'react-bootstrap';

const notFound = () => {
    return (
        <div>
            <Container>
                <h3 className="text-center my-5">Your requested page was Not Found</h3>
            </Container>
        </div>
    );
};

export default notFound;