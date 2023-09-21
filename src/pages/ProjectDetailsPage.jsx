import React from 'react';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Nav } from 'react-bootstrap';
import ListOfProjects from '../assets/utils/projects';

export const ProjectDetailsPage = () => {
    const { id } = useParams();
    const project = ListOfProjects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="pb-5 not-found-project" style={{ marginTop: '80px', backgroundColor: 'rgb(0, 0, 0)' }}>
                <h1>Project Not Found!</h1>
            </div>
        )
    }

  return (
    <div className="pb-5" style={{ marginTop: '80px', backgroundColor: 'rgb(0, 0, 0)' }}>
        <div className="project container">
            <div className="h2-head">
                <h2>{ project.title }</h2>
            </div>

            <Nav.Link className="back" href="/projects">Back</Nav.Link>

            <Row className="justify-content-center align-items-center">
                <Col lg={6} sm={12} className="my-4 px-4">
                    <div className="projects-item-contents-img">
                        <div className="projects-item-content-img-container">
                            <img 
                                className="projects-item-content-img-desktop" 
                                src={ project.imageDesktop } 
                                alt={ project.title }
                                onClick={() => window.open(project.liveDemoURL, '_blank')}
                            />
                            <img 
                                className="projects-item-content-img-mobile" 
                                src={ project.imageMobile } 
                                alt={ project.title }
                                onClick={() => window.open(project.liveDemoURL, '_blank')}
                            />
                        </div>
                    </div>
                </Col>
                <Col lg={6} sm={12} className="my-4 px-4">
                    <div className="projects-items-contents h2-head">
                        <h3 className="my-3">{ project.title }</h3>
                        <p className="text-center">{ project.description }</p>
                    </div>
                </Col>
            </Row>

            <div className="text-center text-white">
                <div className="link-to-demonstrations my-4">
                    <a className="btn btn-lg btn-outline-dark text-white me-3 px-4 py-2 view-more-btn" href={project.liveDemoURL} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a className="btn btn-lg btn-outline-dark text-white ms-3 px-4 py-2 view-more-btn" href={project.gitHubURL} target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                    </a>
                </div>
                <p className="project-used">{ project.toolsUsed }</p>
            </div>

            <div className="key-features container">
                <h3>Key Features:</h3>
                {project.keyFeatures.map((feature) => (
                    <div key={ feature.id }>
                        <h4 className="mt-4">{ feature.featureTitle }</h4>
                        <p>{ feature.featureNote }</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}