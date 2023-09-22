import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

export const FooterComponent = () => {
  return (
    <footer className="footer-otavie text-center text-white pt-5" style={{background: '#000'}}>
      <Container className="p-4 pb-0">
        <Row className="justify-content-center">
            <Col xs="auto">
                <Nav.Link href='https://github.com/Otavie' target='_blank'>
                  {/* <FontAwesomeIcon className="social-link" icon={faGithub} style={{ fontSize: "1.5rem", color: "#FFF" }} /> */}
                  <FontAwesomeIcon className="social-link" icon={faGithub} />
                </Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link href='https://www.linkedin.com/in/otavie/' target='_blank'>
                  {/* <FontAwesomeIcon className="social-link" icon={faLinkedin} style={{ fontSize: "1.5rem", color: "#FFF" }} /> */}
                  <FontAwesomeIcon className="social-link" icon={faLinkedin} />
                </Nav.Link>
            </Col>
            <Col xs="auto">
                <Nav.Link href='https://twitter.com/LoveOtavie' target='_blank' >
                  {/* <FontAwesomeIcon className="social-link" icon={faTwitter} style={{ fontSize: "1.5rem", color: "#FFF" }} /> */}
                  <FontAwesomeIcon className="twitter social-link" icon={faTwitter} />
                </Nav.Link>
            </Col>
        </Row>
      </Container>
      <div className="text-center p-3 pb-5">
        <div class="view-resume">
          <a class="view-resume__link" href="https://drive.google.com/file/d/1uaou6-1UWTr6Hkyk7gE3fAQg1S4Yb0Fu/view?usp=sharing"><span class="view">Resume</span></a>    
        </div>
      </div>
    </footer>
  );
};
