import { Container, Nav } from "react-bootstrap"
import githubLogo from "../images/github-mark-white.svg"
import linkedinLogo from "../images/linkedin-logo.svg"
import { Link } from "react-router-dom"

function Separation() {
  return (
    <Container id="footer">
        <Nav className="p-2">
          <h2 className="d-flex justify-content-start text-light">Portfolio</h2>
          <Link to='https://github.com/brady-billeisen' className="d-flex justify-content-end align-items-center">
            <img src={githubLogo} alt="GitHub Logo" className="ms-5"/>
          </Link>
          <Link to='https://www.linkedin.com/in/bradybilleisen/' className="d-flex justify-content-end align-items-center">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="ms-2" />
          </Link>
        </Nav>
    </Container>
  )
}

export default Separation