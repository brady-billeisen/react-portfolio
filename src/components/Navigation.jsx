import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-dark" id='navbar'>
        <Container className='d-flex m-2'>
            <NavbarBrand>
                <Link to='/'>
                    <h2 className="text-light fw-bold fs-3">Brady Billeisen</h2>
                </Link>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-2 d-flex justify-content-end">
                    <Container className="d-flex justify-content-end align-items-center">
                        <Link to='/about' className='m-2'>About</Link>
                        <Link to='/portfolio' className='m-2'>Portfolio</Link>
                        <Link to='/resume' className='m-2'>Resume</Link>
                        <Link to='/contact' className='m-2'>Contact</Link>
                    </Container>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation