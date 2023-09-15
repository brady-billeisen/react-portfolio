import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Brady Billeisen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/' style={{ margin: "0 4px" }}>Home</Link>
                    <Link to='/about' style={{ margin: "0 4px" }}>About</Link>
                    <Link to='/contact' style={{ margin: "0 4px" }}>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation