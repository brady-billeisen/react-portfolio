import { Container } from 'react-bootstrap'
import resume from '../images/Resume.pdf'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  return (
    <>
      <Container className='d-flex fade-in page-header'>
        <h1 className='text-light m-4'>Resume</h1>
      </Container>
      <Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
              <Col xs={6} md={4} className='skills fw-bold'>Programming Languages:</Col>
              <Col xs={6} md={4} className='text-light'>JavaScript, Python</Col>
          </Row>
        </Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
              <Col xs={6} md={4} className='skills fw-bold'>Full-Stack Development:</Col>
              <Col xs={6} md={4} className='text-light'>MERN (MongoDB, Express.js, React, Node.js), MVC (Model-View-Controller)</Col>
          </Row>
        </Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
              <Col xs={6} md={4} className='skills fw-bold'>Web Development:</Col>
              <Col xs={6} md={4} className='text-light'>Django, React, Node.js, Express.js</Col>
          </Row>
        </Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
              <Col xs={6} md={4} className='skills fw-bold'>Front-End Development:</Col>
              <Col xs={6} md={4} className='text-light'>HTML, CSS, jQuery, Bootstrap</Col>
          </Row>
        </Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
              <Col xs={6} md={4} className='skills fw-bold'>Back-End Development:</Col>
              <Col xs={6} md={4} className='text-light'>Node.js, Express.js, Django, API Development</Col>
          </Row>
        </Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
              <Col xs={6} md={4} className='skills fw-bold'>Database Management:</Col>
              <Col xs={6} md={4} className='text-light'>MySQL, MongoDB</Col>
          </Row>
        </Container>
        <Container className='mt-5 mb-5 fade-in'>
          <Row className='d-flex justify-content-center'>
              <Col xs={6} md={4} className='skills fw-bold'>Miscellaneous:</Col>
              <Col xs={6} md={4} className='text-light'>PWA's (Progressive Web Applications), ORM (Object-Relational Mapping), OOP (Object-Oriented Programming), JSON, DOM Manipulation, VS Code, Git, Data Structures, Algorithms</Col>
          </Row>
        </Container>
        <Container className='d-flex justify-content-center fade-in'>
          <p className='text-light mt-5 mb-5' id='resume-download'>Download my full <a href={resume} id='resume'>Resume</a> for all my contact info, as well as my work experience!</p>
        </Container>
      </Container>
    </>
  )
}

export default Resume