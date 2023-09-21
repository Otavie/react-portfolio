import React from "react";
import ListOfProjects from '../assets/utils/projects';
import { ProjectComponent } from '../components/ProjectComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const ProjectsPage = () => {
  return (
    <div className="pb-5" style={{ marginTop: '80px', backgroundColor: 'rgb(0, 0, 0)' }}>
      <div className="h1-head">
        <h1 className="animate__animated animate__fadeInRight">Projects</h1>
      </div>
      <Container>
          <Row className="justify-content-center">
              {ListOfProjects.map((project) => (
                  <ProjectComponent key={project.id} projectData={project} />
              ))}
          </Row>
      </Container>
    </div>
  );
}