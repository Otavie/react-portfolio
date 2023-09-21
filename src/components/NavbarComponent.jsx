import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import otavieLogo from '../assets/img/otavie-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="otavie-header fixed-top py-3" style={{background: "rgb(0, 0, 0)" }}>
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img 
            src={otavieLogo} 
            alt="Otavie Logo"
            width="28"
            height="37.842951750237" //Aspect Ratio is 300 by 221.97
            className="mx-2"
          />
          <span style={{color: '#FFF', fontWeight: '600', fontSize: '1.5rem'}}>&lt;Otavie /&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-2 px-2" style={{paddingTop: '0.35rem', paddingBottom: '0.35rem'}} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center justify-content-lg-end">
          <Nav className="ml-auto">
            <Nav.Link className="m-2 text-center link-name" href="/">Home</Nav.Link>
            <Nav.Link className="m-2 text-center link-name" href="/projects">Projects</Nav.Link>
            <Nav.Link className="m-2 text-center link-name" href="/about_otavie">About Otavie</Nav.Link>
            <Nav.Link className="m-2 text-center link-name" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}