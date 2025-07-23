import React from 'react';
import ResumeForm from '../components/ResumeBuilder/ResumeForm';
import Suggestions from '../components/ResumeBuilder/Suggestions';

function BuildResume() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Resume Builder</h2>
      <ResumeForm />
      <Suggestions />
    </div>
  );
}

export default BuildResume; 