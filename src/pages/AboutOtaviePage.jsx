import React from 'react';
import { EducationComponent } from '../components/EducationComponent';
import { ExperienceComponent } from '../components/ExperienceComponent';
import { BioComponent } from '../components/BioComponent';

export const AboutOtaviePage = () => {
  return (
    <div className="pb-5 h2-head" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <BioComponent />
      <ExperienceComponent />
      <EducationComponent />
    </div>
  )
}