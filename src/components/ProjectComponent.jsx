import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../projects.css';

export const ProjectComponent = ({ projectData }) => {
    const { id, title, imageDesktop, toolsUsed } = projectData;

  return (
    <Col lg={6} sm={12} className="my-4 px-4" style={{ overflowY: 'hidden' }}>
      <Card className={`project-card px-4 fade-in-up-${id}`} style={{ width: '100%', minHeight: '450px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          <div className="img-container">
            <Card.Img 
              variant="top" 
              src={imageDesktop} 
              alt={title}
              className="project-image"
              style={{ minHeight: '150px', width: '100%', objectFit: 'contain', borderRadius: '5px' }}
            />
          </div>

          <Card.Body className="card-body project-text h2-head">
            <h3 className="text-center">{title}</h3>
            <Card.Text>
              <p className="fw-bold text-secondary text-center my-3">{toolsUsed}</p>
            </Card.Text>
            <Link to={`/project/${projectData.id}`} className="btn btn-lg btn-outline-dark text-white px-4 py-3 mb-3 view-more-btn">
              View More 
            </Link>
          </Card.Body>
      </Card>
    </Col>
  )
}
