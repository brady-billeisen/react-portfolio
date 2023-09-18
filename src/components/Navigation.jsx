import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
        <Container className='d-flex m-2'>
            <NavbarBrand>
                <Link to='/'>
                    <h1 className="text-light fw-bold fs-3">Brady Billeisen</h1>
                </Link>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-2 justify-content-end">
                    <Link to='/about' className='m-2'>About</Link>
                    <Link to='/portfolio' className='m-2'>Portfolio</Link>
                    <Link to='/resume' className='m-2'>Resume</Link>
                    <Link to='/contact' className='m-2'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation