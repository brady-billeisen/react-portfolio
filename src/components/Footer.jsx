import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <Nav className="me-auto" id='navbar'>
        <Container>
            <Container className='d-flex justify-content-center mt-4 mb-4'>
                <Link to='/about' style={{ margin: "0 4px" }} id='footer-link'>About</Link>
                <Link to='/portfolio' style={{ margin: "0 4px" }} id='footer-link'>Portfolio</Link>
                <Link to='/resume' style={{ margin: "0 4px" }} id='footer-link'>Resume</Link>
                <Link to='/contact' style={{ margin: "0 4px" }} id='footer-link'>Contact</Link>
            </Container>
            <Container className='pb-5'>
                <p className='d-flex justify-content-center text-light m-4'>This is the whole point of technology.  It creates an appetite for immortality on the one hand.  It threatens universal extinction on the other. Technology is lust removed from nature. - Don DeLillo (Author)</p>
            </Container>
        </Container>
    </Nav>
  )
}

export default Footer