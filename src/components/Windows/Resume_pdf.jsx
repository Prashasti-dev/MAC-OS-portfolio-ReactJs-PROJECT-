import React from 'react';
import MacWindows from './MacWindows';
import "./resume.scss";

const Resume_pdf = ({windowName, windowState, setWindowState}) => {
  return (
    <MacWindows windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
      <div className="resume-window">
         <embed src="/resume.pdf" frameborder="0"></embed>
      </div>
    </MacWindows>
  );
};

export default Resume_pdf;