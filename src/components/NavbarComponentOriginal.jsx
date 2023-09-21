import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import otavieLogo from '../assets/img/otavie-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavbarComponent = () => {
  return (
    // <Navbar expand="lg" className="fixed-top py-3" style={{background: '#01579b', fontFamily: "'Poppins', sans-serif"}}>
    <Navbar expand="lg" className="otavie-header fixed-top py-3" style={{background: '#000', fontFamily: "'Oxanium', cursive"}}>
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img 
            src={otavieLogo} 
            alt="Otavie Logo"
            width="28"
            height="37.842951750237" //Aspect Ratio is 300 by 221.97
            className="mx-2"
          />
          <span style={{color: '#FFF', fontFamily: "'Orbitron', sans-serif", fontWeight: '600', fontSize: '1.5rem'}}>&lt;Otavie /&gt;</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-3 px-2" style={{paddingTop: '0.35rem', paddingBottom: '0.35rem'}} /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-2 px-2" style={{paddingTop: '0.35rem', paddingBottom: '0.35rem'}} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center justify-content-lg-end">
          <Nav className="ml-auto">
            <Nav.Link className="m-2 text-center text-white border border-light px-4" href="/">Home</Nav.Link>
            <Nav.Link className="m-2 text-center text-white border border-light px-4" href="/projects">Projects</Nav.Link>
            <Nav.Link className="m-2 text-center text-white border border-light px-4" href="/about_otavie">About Otavie</Nav.Link>
            <Nav.Link className="m-2 text-center text-white border border-light px-4" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}