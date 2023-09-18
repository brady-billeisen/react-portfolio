import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
        <Container>
            <NavbarBrand>
                <Link to='/'>
                    <h1 className="text-light fw-bold fs-3">Brady Billeisen</h1>
                </Link>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/about' style={{ margin: "0 4px" }}>About</Link>
                    <Link to='/portfolio' style={{ margin: "0 4px" }}>Portfolio</Link>
                    <Link to='/resume' style={{ margin: "0 4px" }}>Resume</Link>
                    <Link to='/contact' style={{ margin: "0 4px" }}>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation