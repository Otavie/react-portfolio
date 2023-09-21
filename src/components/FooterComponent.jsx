import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

export const FooterComponent = () => {
  return (
    <footer className="footer-otavie text-center text-white pt-5" style={{background: '#000'}}>
    {/* // <footer className="footer-otavie text-center text-white pt-5" style={{background: 'red'}}> */}
      <Container className="p-4 pb-0">
        <Row className="justify-content-center">
            <Col xs="auto">
                <Nav.Link href='https://github.com/Otavie' target='_blank'>
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.5rem", color: "#FFF" }} />
                </Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link href='https://www.linkedin.com/in/otavie/' target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem", color: "#FFF" }} />
                </Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link href='https://twitter.com/LoveOtavie' target='_blank' >
                  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "1.5rem", color: "#FFF" }} />
                </Nav.Link>
            </Col>
        </Row>
      </Container>
      <div className="text-center p-3 pb-5">
        <div class="view-resume">
            <a class="view-resume__link" href="https://drive.google.com/file/d/1m_JSx_2XDnEaePOk4mYuMbje-iZpkcDv/view?usp=share_link"><span class="view">Resume</span></a>    
        </div>
      </div>
    </footer>
  );
};
