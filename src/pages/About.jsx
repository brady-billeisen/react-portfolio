import { Container } from 'react-bootstrap'
import headshot from '../images/headshot.jpg'

function About() {
  return (
    <>
      <Container className='d-flex fade-in page-header'>
        <h1 className='text-light m-4'>About Me</h1>
      </Container>
      <Container>
        <Container className='d-flex justify-content-center fade-in'>
          <img src={headshot} id='headshot' />
        </Container>
        <Container className='text-light fade-in'>
          <p className='about-me mb-4'>
          Hello! I'm Brady Billeisen, a passionate software engineer who embarked on a coding journey that began in the 
          heart of Indianapolis, IN and led me to the vibrant city of Nashville, TN.
          </p>
          <p className='about-me mb-4'>
          My fascination with code ignited during high school when a classmate's hack into the school's 
          webapp gave us free snow days. That moment, even though it was completely unethical, 
          left me in awe of the possibilities that coding held. The intrigue deepened when I discovered that one of my favorite comedians, 
          Cody Ko, was once a software engineer who developed the wildly popular app "I'd Cap That." 
          Unlike many, I didn't feel drawn to the traditional college path. However, my friend's older brother 
          introduced me to the concept of coding bootcamps, and from that point on, I was hooked. 
          I took a leap of faith, quitting my job and enrolling in Hack Reactor's coding bootcamp, 
          later transferring to Vanderbilt University's coding bootcamp.
          </p>
          <p className='about-me mb-4'>
          This journey has not only ignited a passion within me but also fostered an addiction—a relentless pursuit of knowledge 
          and the thrill of building innovative applications.
          </p>
          <p className='about-me mb-4'>
          Beyond the world of code, I am equally passionate about music and sports. For the past six years, 
          I've been producing electronic music, finding solace and creativity in each beat. 
          Additionally, my love for sports runs deep. Having played basketball, football, and rugby in my youth, 
          I continue to relish in the excitement of watching games, especially during football season and the chaos of March Madness.
          </p>
          <p className='about-me mb-2'>
          I thrive on learning, creating, and exploring the endless possibilities that technology offers. 
          My skills in JavaScript, Python, and web development technologies, coupled with hands-on experience in Django, 
          React, and Node.js, are the tools I wield as I embark on my journey as a software engineer. 
          My adaptability, problem-solving mindset, and creative spirit drive me to excel in this ever-evolving field. 
          I am eager to contribute my skills and creativity to a dynamic software engineering team, pushing boundaries 
          and shaping the future of technology.
          </p>
          <p className='about-me mt-4 mb-5'>
          Feel free to reach out to me through my contact page. Let's connect and explore the exciting possibilities that lie ahead!
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About