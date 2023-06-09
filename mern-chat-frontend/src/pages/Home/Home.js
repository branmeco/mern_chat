import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";


function Home() {
    return <Row>
        <Col md={5} className="d-flex flex-direction-column align-items-center justify-content-center me-5">
            <div>
                <h1>Share the world with your friends</h1>
                <p>Chat App lets you connect with the works</p>
                <LinkContainer to="/chat">
                    <Button variant="success">
                        Get Started <i className="fas fa-comments home-message-icon"></i>
                    </Button>
                </LinkContainer>
            </div>
        </Col>
        <Col md={6} className="home__bg">

        </Col>
    </Row>
}

export default Home;