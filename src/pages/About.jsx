import { Container } from 'react-bootstrap'
import headshot from '../images/headshot.jpg'

function About() {
  return (
    <main>
      <Container>
        <Container className='d-flex' id='page-header'>
          <h1 className='text-light m-4'>About Me</h1>
        </Container>
        <Container>
          <img src={headshot} id='headshot' />
        </Container>
      </Container>
    </main>
  )
}

export default About