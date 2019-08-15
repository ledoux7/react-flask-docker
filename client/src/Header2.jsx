import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'


class Header extends React.Component {
    render() {
        return(
            <Navbar collapseOnSelect>

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"> Reyna MakeUp </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Inicio</NavItem>
                        <NavDropdown title="Maquillaje" id="basic-nav-dropdown">
                            <NavItem eventKey={2} href="#">opcion 1</NavItem>
                            <NavItem eventKey={3} href="#">opcion 2</NavItem>
                            <NavItem eventKey={4} href="#">opcion 3</NavItem>
                        </NavDropdown>
                        <NavDropdown title="Cursos">
                            <NavItem eventKey={2} href="#">opcion 1</NavItem>
                            <NavItem eventKey={3} href="#">opcion 2</NavItem>
                            <NavItem eventKey={4} href="#">opcion 3</NavItem>
                        </NavDropdown>
                        <NavDropdown title="Cejas">
                            <NavItem eventKey={2} href="#">opcion 1</NavItem>
                            <NavItem eventKey={3} href="#">opcion 2</NavItem>
                            <NavItem eventKey={4} href="#">opcion 3</NavItem>
                        </NavDropdown>
                        <NavItem eventKey={1} href="#">Contacto</NavItem>
                        
                    </Nav>

                    <Nav pullRight>
                        <NavItem bsStyle="primary"><input type='text'/><Button> Buscar </Button></NavItem>                                      
                        <NavItem bsStyle="primary">Ingresar</NavItem>                        
                        <NavItem bsStyle="success">Registrate</NavItem>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;