import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
        <Nav className="me-auto bg-dark">
            <ul>
                <li>
                    <Link to='/about' style={{ margin: "0 4px" }}>About</Link>
                </li>
                <li>
                    <Link to='/portfolio' style={{ margin: "0 4px" }}>Portfolio</Link>
                </li>
                <li>
                    <Link to='/resume' style={{ margin: "0 4px" }}>Resume</Link>
                </li>
                <li>
                    <Link to='/contact' style={{ margin: "0 4px" }}>Contact</Link>
                </li>
            </ul>
        </Nav>
  )
}

export default Footer