import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/logo.png'


export default function NavTwo() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-navy_300" variant="light">
        <Container>
        <Navbar.Brand href="/">
            <img
                src= {Logo}
                width="70"
                height="70"
                className="d-inline-block align-top mr-5"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link id="nav1" href="/why-triiyo" className="text-base font-medium text-white hover:text-gold_300">Why triiyo</Nav.Link>
            <Nav.Link id="nav2" href="/resources" className="text-base font-medium text-white hover:text-gold_300">Resources</Nav.Link>
            <NavDropdown title="Contact us" id="collasible-nav-dropdown" className="text-base font-medium text-white hover:text-gold_300">
                <NavDropdown.Item href="/about-us">About triiyo</NavDropdown.Item>
                <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="/book-demo" className="mx-20 md:ml-8 whitespace-nowrap md:inline-flex text-center items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-gold_300 hover:bg-navy_300">Book Demo</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}