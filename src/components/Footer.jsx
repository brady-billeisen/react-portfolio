import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <Nav className="me-auto" id='navbar'>
        <Container>
            <Container className='mt-4 mb-4'>
                <Link to='/about' style={{ margin: "0 4px" }} id='footer-link'>About</Link>
                <Link to='/portfolio' style={{ margin: "0 4px" }} id='footer-link'>Portfolio</Link>
                <Link to='/resume' style={{ margin: "0 4px" }} id='footer-link'>Resume</Link>
                <Link to='/contact' style={{ margin: "0 4px" }} id='footer-link'>Contact</Link>
            </Container>
            <Container>
                <p className='text-light m-4'>Aspiring software engineer with a strong foundation in JavaScript, Python, and web development technologies. Soon to be graduate of Vanderbilt Coding Bootcamp with hands-on experience in building web applications using Django, React, and Node.js. Eager to contribute creativity and technical skills to a dynamic software engineering team.</p>
            </Container>
        </Container>
    </Nav>
  )
}

export default Footer