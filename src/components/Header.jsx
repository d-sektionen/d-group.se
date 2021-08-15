import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/logo.png"
import Container from '@material-ui/core/Container';
import '@fontsource/roboto';
import { Link } from 'react-router-dom';

function test () {
    Navbar.expanded = "false"
}



const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
            <Container fixed>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="70"
                        height="70"
                        className="Logo-Header-Top"
                        alt="DG logo top header"
                    /> {' '}
                                 
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link onSelect={()=> test()} as={Link} to="/" >Start</Nav.Link>
                        <Nav.Link as={Link} to="Festkalender">Festkalender</Nav.Link>
                        <Nav.Link as={Link} to="Fester">Arrangemang</Nav.Link>
                        <Nav.Link as={Link} to="WoF">Wall of Fame</Nav.Link>
                        <Nav.Link as={Link} to="groupis">D-Group 21/22</Nav.Link>
                        <Nav.Link href="https://DomD.nu">DÖMD</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;