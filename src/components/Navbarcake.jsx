import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

const Navbarcake = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-warning">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link  className="text-decoration-none text-light m-2" to="/">🏠Home</Link>
                        <Link  className="text-decoration-none text-light m-2" to="/contact">📙Contact</Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand className='text-white'>Happy Cake 🍰</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </>
    )
}

export default Navbarcake
