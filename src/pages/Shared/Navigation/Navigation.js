import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className='logo'>Imran Ahmed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link className='link-button ms-2' href="https://drive.google.com/file/d/1ahdX80u3DVXhqTcBXZdzCqMjHZ9jf0YM/view?usp=sharing" target='_blank' rel="noreferrer">See Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;