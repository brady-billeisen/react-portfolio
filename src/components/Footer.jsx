import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <Nav className="me-auto navbar">
        <Container>
            <Container className='d-flex justify-content-center mt-4 mb-4'>
                <Link to='/' style={{ margin: "0 4px" }} className='footer-link'>Home</Link>
                <Link to='/about' style={{ margin: "0 4px" }} className='footer-link'>About</Link>
                <Link to='/portfolio' style={{ margin: "0 4px" }} className='footer-link'>Portfolio</Link>
                <Link to='/resume' style={{ margin: "0 4px" }} className='footer-link'>Resume</Link>
                <Link to='/contact' style={{ margin: "0 4px" }} className='footer-link'>Contact</Link>
            </Container>
            <Container className='pb-5'>
                <p className='d-flex justify-content-center text-light m-4'>
                  The number one benefit of information technology is that it empowers people to do what they want to do. 
                  It lets people be creative. It lets people be productive. It lets people learn things they didn't think they could 
                  learn before, and so in a sense it is all about potential. - Steve Ballmer
                </p>
            </Container>
        </Container>
    </Nav>
  )
}

export default Footer