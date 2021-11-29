import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id='about-me'>
            <Container>
                <Row>
                    <Col md={4} className='d-flex align-items-center'>
                        <img className='img-fluid' src="https://i.ibb.co/kgWy0KQ/imran.jpg" alt="" />
                    </Col>
                    <Col md={8} className='mt-4 mt-md-0'>
                        <h2 align="center">About Me</h2>
                        <div class="under-line-box">
                            <div class="under-line">
                                <hr class="line" /><div class="round"></div>
                            </div>
                        </div>
                        <div>
                            <p><b>Name: </b>Imran Ahmed</p>
                            <p><b>Profile: </b>MERN STACK DEVELOPER</p>
                            <p><b>Email: </b><a className='orange' href="mailto:stimran4405@gmail.com">stimran4405@gmail.com</a></p>
                            <p>
                                I am a skilled and passionate Web Development, WordPress customization. I have over 3 years of experience in Web Development Industry. My expertise in Fully Responsive Web Design, Bug Fixing, WP Customization, Development of any Website from scratch.
                            </p>
                            <p>I am also experience in React JS.</p>

                            <h3>Connect with me social: </h3>
                            <ul className='social-icon'>
                                <li><a href="https://www.facebook.com/s.imran.ahmed.st/"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a className='text-dark' href="https://github.com/imran-de"><i className="fab fa-github-square"></i></a></li>
                                <li><a href="linkedin.com/in/s-imran-ahmed/"><i className="fab fa-linkedin"></i></a></li>

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMe;