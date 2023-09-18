import { Container, Nav } from "react-bootstrap"
import githubLogo from "../images/github-mark-white.svg"
import linkedinLogo from "../images/linkedin-logo.svg"
import { Link } from "react-router-dom"

function Separation() {
  return (
    <Container id="footer">
        <Nav className="p-2">
          <Container className="d-flex justify-content-start align-items-center">
            <h2 className="d-flex justify-content-start text-light">Portfolio</h2>
            <Container className="d-flex justify-content-end">
              <Link to='https://github.com/brady-billeisen'>
                <img src={githubLogo} alt="GitHub Logo" className="ms-2 me-2"/>
              </Link>
              <Link to='https://www.linkedin.com/in/bradybilleisen/'>
                <img src={linkedinLogo} alt="LinkedIn Logo" className="ms-2 me-2" />
              </Link>
            </Container>
          </Container>
        </Nav>
    </Container>
  )
}

export default Separation