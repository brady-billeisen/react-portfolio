import { Container } from 'react-bootstrap'
import Projects from '../components/utils/Projects'
import githubLogo from '../images/github-green.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Portfolio() {
  return (
    <>
      <Container className='d-flex fade-in' id='page-header'>
        <h1 className='text-light m-4'>Projects</h1>
      </Container>
      <Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
            {Projects.map((project) => (
              <Col xs={12} md={4} key={project.id} className='d-flex justify-content-center mt-3 mb-3'>
                <Card className='text-center custom-card m-2' style={{ width: '24rem', height: '15rem', backgroundImage: `url(${project.src})`, backgroundSize: 'cover' }}>
                  <Card.Body variant='top'>
                    <Container className='card-links'>
                      <Card.Title>
                        <a className='text-light fw-bold' href={project.deployed}>{project.title}</a>
                      </Card.Title>
                      <a className='pb-3' href={project.repo}>
                        <img src={githubLogo} alt="github-logo" className='mt-2' />
                      </a>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Portfolio