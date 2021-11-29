import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 align="center">Latest Projects</h2>
            <div className="under-line-box">
                <div className="under-line">
                    <hr className="line" /><div className="round"></div>
                </div>
            </div>

            <Container>
                <h5 className='text-center pt-3 pb-5'>Check out my latest creative works. I have done a lot of work for my local and international clients. Here is a shortlist of my newly designed websites.</h5>

                <Row xs={1} md={3} xxl={4} className="g-4">
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/nCyGrJk/drone.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>MERN STACK Project</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <a href="#github" target='_blank'>Code</a>
                                <a href="#Live" target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/nCyGrJk/drone.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>MERN STACK Project</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <a href="#github" target='_blank'>Code</a>
                                <a href="#Live" target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/nCyGrJk/drone.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>MERN STACK Project</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <a href="#github" target='_blank'>Code</a>
                                <a href="#Live" target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/nCyGrJk/drone.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>MERN STACK Project</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <a href="#github" target='_blank'>Code</a>
                                <a href="#Live" target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/nCyGrJk/drone.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>MERN STACK Project</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <a href="#github" target='_blank'>Code</a>
                                <a href="#Live" target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/nCyGrJk/drone.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>MERN STACK Project</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <a href="#github" target='_blank'>Code</a>
                                <a href="#Live" target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Projects;