import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                                <Card.Title className='text-uppercase'>Drone</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <Link to="/details">Details</Link>
                                <a href="https://github.com/imran-de/drone-client" rel='noreferrer' target='_blank'>Code</a>
                                <a href="https://drone-45254.web.app/" rel='noreferrer' target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/QbqD403/vacation-planner.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Vacation planner</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS etc
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <Link to="/details">Details</Link>
                                <a href="https://github.com/imran-de/vacation-planner-client" rel='noreferrer' target='_blank'>Code</a>
                                <a href="https://vacation-planner-916b4.web.app/" rel='noreferrer' target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/w7WMfkz/healthcare.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Medi-Health care</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Bootstrap, React-router-dom etc.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <Link to="/details">Details</Link>
                                <a href="https://github.com/imran-de/medi-healt-care" rel='noreferrer' target='_blank'>Code</a>
                                <a href="https://health-care-react.web.app/" target='_blank' rel="noreferrer">Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/SVQH0Gx/club.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Club Landing page</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    HTML, CSS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <Link to="/details">Details</Link>
                                <a href="https://github.com/imran-de/Football" rel='noreferrer' target='_blank'>Code</a>
                                <a href="https://imran-de.github.io/Football/" rel='noreferrer' target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/bKWc948/cbr.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Honda Landing page</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    HTML, CSS, Bootstrap etc
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <Link to="/details">Details</Link>
                                <a href="https://github.com/imran-de/honda-cbr" rel='noreferrer' target='_blank'>Code</a>
                                <a href="https://honda-cbr-imran.netlify.app/" rel='noreferrer' target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-100'>
                            <div className='project-img'>
                                <Card.Img variant="top" src="https://i.ibb.co/7C5H6gm/doctor.png" />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Doctor Portal</Card.Title>
                                <Card.Text>
                                    <span className='fw-bolder'>Technology: </span>
                                    React JS, Node JS, MongoDB, Express JS
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between border-0'>
                                <Link to="/details">Details</Link>
                                <a href="https://github.com/imran-de/Doctors-portal-client" rel='noreferrer' target='_blank'>Code</a>
                                <a href="https://simple-firebase-auth-prac.web.app/" rel='noreferrer' target='_blank'>Live</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Projects;