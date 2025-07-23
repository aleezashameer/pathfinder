import React from 'react';
import Checklist from '../components/ApplicationTracker/Checklist';
import DocumentUpload from '../components/ApplicationTracker/DocumentUpload';
import CollegeMajorGuidance from '../components/Guidance/CollegeMajorGuidance';

function ApplyNow() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">College Application Tracker</h2>
      <Checklist />
      <DocumentUpload />
      <h2 className="text-xl font-semibold">Personalized College & Major Guidance</h2>
      <CollegeMajorGuidance />
    </div>
  );
}

export default ApplyNow; 