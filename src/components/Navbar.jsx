import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Navbar1 = () => {
    return (
        <div>
            <Navbar bg="primary">
                <img style={{ width: '50px' }} src="https://img.icons8.com/officel/16/000000/scared-face-meme.png" alt="#"/> 
                <Navbar.Brand href="#home">Contact</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navbar1;