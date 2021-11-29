import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <section>
            <Container fluid>
                <Row className='my-5 d-flex'>
                    <Col md={6} className='d-flex align-items-center order-2 order-md-1'>
                        <div className="ms-lg-5 mt-5 mt-md-0 text-center">
                            <h1 className='mb-4'>Hi! This Is <span className="orange">Imran Ahmed.</span></h1>
                            <h3 className='mb-4'>Professional <span className="orange">MERN Stack Developer</span></h3>
                            <p className="text-start">
                                Web Design & Development is my passion, I get deeper to understand client's need & problems. My mission is to satisfy every client and become myself a pro developer to learn new updates every day. You'll get lifetime support in any situation, I Premise that, You'll get Fanatical Support and Absolutely Positively On-time Duty.
                            </p>
                            <div className="text-center" style={{ marginTop: "40px" }}>
                                <a className="link-button" href="#Contact">Contact Now</a>
                                <a className='link-button ms-3' href="https://drive.google.com/file/d/1ahdX80u3DVXhqTcBXZdzCqMjHZ9jf0YM/view?usp=sharing">See Resume</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='order-1'>
                        <img className='img-fluid' src="https://i.ibb.co/1Jjx6GW/banner.png" height='400px' alt="banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;