import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row, Button } from 'react-bootstrap';

function Contact() {
  // State to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Regex pattern for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Event handler to check email validity
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const init = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    init();
  };

  return (
    <>
      <Container className='d-flex fade-in' id='page-header'>
        <h1 className='text-light m-4'>Contact</h1>
      </Container>
      <Container className='fade-in'>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={4} className='mt-5 mb-5'>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='form-label'>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="first & last name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='form-label'>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  isInvalid={!isValidEmail}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='form-label'>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder='brief message...'
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button className='form-btn' type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;