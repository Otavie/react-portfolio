import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import altSchoolLogo from '../assets/img/altschool-logo.png'
import cuLogo from '../assets/img/cu-logo.png'
import freelance from '../assets/img/freelance.jpg'
import "react-vertical-timeline-component/style.min.css";

export const ExperienceComponent = () => {
  return (
    <>
      <h2 className="text-white text-center py-5">Experiences</h2>
      
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement 
          date="2023 - 2024"
          dateClassName="timeline-date"
          iconStyle={{ background: "#000", color: "#00FF00" }}
          icon={ <img src={cuLogo} alt="Covenant University Logo" className="time-line-logo" /> }
        >
          <h2 className="text-success fw-bold" style={{ fontSize: '1.75rem' }}>AltSchool Africa</h2>
          <h4 className="text-dark fw-bold" style={{ fontSize: '1.25rem' }}>🚀 Open Source Maintainer/Contributor 🚀</h4>
          <p><span className="fw-bold">Responsibilities: </span>Created an Open Source project to enable beginners to the Open Source World, understand how to make contributions to OS projects. Also, trains fellow students on how to work with VCS like git.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          date="2022 - 2023"
          dateClassName="timeline-date"
          iconStyle={{ background: "#000", color: "#00FF00" }}
          icon={ <img src={altSchoolLogo} alt="AltSchool Africa Logo" className="time-line-logo" /> }
        >
          <h2 className="text-success fw-bold" style={{ fontSize: '1.75rem' }}>Covenant University</h2>
          <h4 className="text-dark fw-bold" style={{ fontSize: '1.25rem' }}>💡  Creative Instructor, Hebron Startup Lab 💡 </h4>
          <p><span className="fw-bold">Responsibilities: </span>Trains and organise training for students on technical skills such as programming skills, etc.
            Developed sample Hebron StartUp Lab Website
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          date="2021 - Present"
          dateClassName="timeline-date"
          iconStyle={{ background: "#000", color: "#00FF00" }}
          icon={ <img src={freelance} alt="AltSchool Africa Logo" className="time-line-logo" /> }
        >
          <h2 className="text-success fw-bold" style={{ fontSize: '1.75rem' }}>Freelancer</h2>
          <h4 className="text-dark fw-bold" style={{ fontSize: '1.25rem' }}>👨‍💻 Frontend Developer Extraordinaire! 👨‍💻</h4>
          <p><span className="fw-bold">Responsibilities: </span>Crafts captivating websites with pixel-perfect precision.
          Translates UI Designs into stunning, user-friendly and functional websites/web app.
          Turning visions into digital reality, one project at a time.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          date="2022 - 2023"
          dateClassName="timeline-date"
          iconStyle={{ background: "#000", color: "#00FF00" }}
          icon={ <img src={cuLogo} alt="Covenant University Logo" className="time-line-logo" /> }
        >
          <h2 className="text-success fw-bold" style={{ fontSize: '1.75rem' }}>Research Assistant</h2>
          <h4 className="text-dark fw-bold" style={{ fontSize: '1.25rem' }}>🌐 Research Assistant, Covenant University 🌐</h4>
          <p><span className="fw-bold">Responsibilities: </span>Conduct extensive literature review in the field of <span className="text-primary">Digital Twin</span> and <span className="text-primary">Reinforcement Learning</span>. Documentation of research procedures and methods. Developed the frontend user interface of chatbot project.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </>
  )
}
