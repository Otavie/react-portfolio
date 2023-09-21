import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import altSchoolLogo from '../assets/img/altschool-logo.png'
import cuLogo from '../assets/img/cu-logo.png'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';

export const EducationComponent = () => {
  return (
    <>
      <h2 className="text-white text-center py-5">Education</h2>

      <VerticalTimeline lineColor="#000">

        <VerticalTimelineElement 
          date="2023 - 2024"
          dateClassName="timeline-date"
          iconStyle={{ background: "#000", color: "#00FF00" }}
          icon={ <img src={altSchoolLogo} alt="AltSchool Africa Logo" className="time-line-logo" /> }
        >
          <h2 className="text-success fw-bold" style={{ fontSize: '1.75rem' }}>AltSchool Africa</h2>
          <h4 className="text-dark fw-bold" style={{ fontSize: '1.25rem' }}>Diploma, Software Engineering</h4>
          <p><span className="fw-bold">Courses:</span> NodeJS, ExpressJS, MongoDB, Technical Writing, Team Management</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          date="2021 - 2023"
          dateClassName="timeline-date"
          iconStyle={{ background: "#000", color: "#00FF00" }}
          icon={ <img src={cuLogo} alt="Covenant University Logo" className="time-line-logo" /> }
        >
          <h2 className="text-success fw-bold" style={{ fontSize: '1.75rem' }}>Covenant University</h2>
          <h4 className="text-dark fw-bold" style={{ fontSize: '1.25rem' }}>MSc, Computer Science</h4>
          <p><span className="fw-bold">Courses: </span>Research, Development and Publication, Artificial Intelligence (AI), Natural Language Processing, Machine Learning, Software Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          date="2006 - 2010"
          dateClassName="timeline-date"
          iconStyle={{ background: "#000", color: "#00FF00" }}
          icon={ <SchoolIcon /> }
        >
          <h2 className="text-success fw-bold" style={{ fontSize: '1.75rem' }}>University of Port Harcourt</h2>
          <h4 className="text-dark fw-bold" style={{ fontSize: '1.25rem' }}>BSc, Computer Science</h4>
          <p><span className="fw-bold">Courses: </span>Programming Concepts, JavaScripts, Data Structure and Algorithms, Discrete Mathematics</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
