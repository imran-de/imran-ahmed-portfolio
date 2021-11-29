import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const WhatIDo = () => {
    return (
        <section id='what-i-do' className='my-5'>
            <h2 align="center">What I Do</h2>
            <div class="under-line-box">
                <div class="under-line">
                    <hr class="line" /><div class="round"></div>
                </div>
            </div>
            <Container className='mt-5'>
                <Row className="g-4">
                    <Col md={4}>
                        <Card className='shadow h-100' style={{ border: 'none' }}>
                            <div className='d-flex justify-content-center algin-items-center pt-4'>
                                <img src="https://imran-de.github.io/imran-ahmed/image/web-dev.png" alt="" width='75px' />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title>WEB DEVELOPMENT</Card.Title>
                                <Card.Text>
                                    I can develop secure web application using latest web technology.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='shadow h-100' style={{ border: 'none' }}>
                            <div className='d-flex justify-content-center algin-items-center pt-4'>
                                <img src="https://imran-de.github.io/imran-ahmed/image/content.png" alt="" width='75px' />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='text-uppercase'>Application Development</Card.Title>
                                <Card.Text>
                                    I can develop complex and secure desktop application using JavaScript technology.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='shadow h-100' style={{ border: 'none' }}>
                            <div className='d-flex justify-content-center algin-items-center pt-4'>
                                <img src="https://imran-de.github.io/imran-ahmed/image/responsive-design.png" alt="" width='75px' />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='text-uppercase'>Responsive Design</Card.Title>
                                <Card.Text>
                                    I can make your web application in to mobile responsive.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='shadow h-100' style={{ border: 'none' }}>
                            <div className='d-flex justify-content-center algin-items-center pt-4'>
                                <img src="https://imran-de.github.io/imran-ahmed/image/bug-fix.png" alt="" width='75px' />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='text-uppercase'>Bug Fixing</Card.Title>
                                <Card.Text>
                                    Fix Responsive Issues, Wordpress Error, CSS and JavaScript Error, Database Error with Clean and Well Commented Code.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='shadow h-100' style={{ border: 'none' }}>
                            <div className='d-flex justify-content-center algin-items-center pt-4'>
                                <img src="https://imran-de.github.io/imran-ahmed/image/content.png" alt="" width='75px' />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='text-uppercase'>Content Management</Card.Title>
                                <Card.Text>
                                    Website Management, Content Upload and Security Enhancement Preventing Malware and Unwanted Access.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhatIDo;