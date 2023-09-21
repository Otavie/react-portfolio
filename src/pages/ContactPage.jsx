import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../contact.css';

export const ContactPage = () => {
  return (
    <div className="contact" style={{ marginTop: '80px' }}>
      <div className="py-4">
          <h1 className="text-center">Contact Page!</h1>
      </div>
      <Container>
          <Row className="justify-content-center">
              Contact
          </Row>
      </Container>
    </div>
  )
}
