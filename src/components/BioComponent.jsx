import React from 'react';
import '../about.css';

export const BioComponent = () => {
  return (
    <div className="text-center text-white" style={{ marginTop: '80px' }}>
        <div className="h1-head px-3">
          <h1 className="animate__animated animate__fadeInDown">About Otavie</h1>
        </div>
        <div className="container container-paragraph px-3 h2-head">
          <h3 className="pb-3 mt-3">The World of a Full Stack Engineer</h3>
          <p className="paragraph">
              Hi there! I'm Otavie. I specialize in creating seamless user experiences by integrating 
              interactive and visually appealing UI/UX designs into functional web applications. 
              With expertise in frontend technologies such as <span className="otavie-skills">HTML, (S)CSS, Bootstrap, JavaScript, React, and Vue</span>, 
              I ensure that the frontend of the applications I build is user-friendly and engaging.
          </p>
          <p className="paragraph">
              On the backend side, I have a diverse skill set, and I'm proficient in programming languages 
              like <span className="otavie-skills">Python, and Node.js</span>. This allows me to handle server-side logic and build robust and 
              scalable backend systems that power the frontend. I'm well-versed in creating <span className="otavie-skills">RESTful APIs </span>  
              and handling data storage and retrieval efficiently.
          </p>
          <p className="paragraph">
              As a fullstack developer, I thrive in collaborative environments. I'm passionate about learning 
              and staying up-to-date with the latest technologies and best practices, enabling me to deliver 
              cutting-edge solutions.
          </p>
        </div>
    </div>
  )
}
