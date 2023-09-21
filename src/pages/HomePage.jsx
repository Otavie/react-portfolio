import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'animate.css';
import '../home.css';
import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import git from '../assets/img/git.png';
import python from '../assets/img/python.png';
import vue from '../assets/img/vue.png';
import node from '../assets/img/nodejs.png';

export const HomePage = () => {
  return (
    <div className="home-container">
      <style className="home" style={{ marginTop: '80px' }}>
        <div className="h1-head home-head">
          <h1 className="text-center animate__animated animate__fadeInLeft">Otavie's World!</h1>
          <h3 className="px-3 text-center">the world of a full stack engineer</h3>
        </div>
        <Container className="explore-btn-container">
          <Nav.Link className="explore-btn animate__animated animate__zoomIn" href="/projects">Explore my projects</Nav.Link>
        </Container>
      </style>

      <div className="home-image-container">
        <img className="javascript bouncing-skill bouncing-skill-javascript" src={ javascript } alt="React" />
        <img className="react bouncing-skill bouncing-skill-react" src={ react } alt="React" />
        <img className="git bouncing-skill bouncing-skill-git" src={ git } alt="Git" />
        <img className="python bouncing-skill bouncing-skill-python" src={ python } alt="Python" />
        <img className="vue bouncing-skill bouncing-skill-vue" src={ vue } alt="Vue" />
        <img className="node bouncing-skill bouncing-skill-node" src={ node } alt="Node" />
      </div>

    </div>
  )
}
